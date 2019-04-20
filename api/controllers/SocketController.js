'use strict';

const config = require('../config');
/* eslint-disable global-require */
let User;
let Ticket;
let id;
if (config.enablePostgres) {
	User = require('../models-postgres/User');
	// Ticket = require('../models-postgres/Ticket');
	id = 'id';
} else {
	User = require('../models/User');
	Ticket = require('../models/Ticket');
	id = '_id';
}
/* eslint-enable global-require */

const { getInitialState } = require('./ReduxStateController');

class SocketController {
	constructor(io, socket) {
		this.io = io;
		this.socket = socket;
		const { user } = socket.client.request;

		if (user) {
			this.user = user;

			// Allows us to use this.io.to() directly on a user's database ID.
			socket.join(user[id]);

			// Make the admin room and mentor room disjoint:
			// admins = may or may not be mentor
			// mentors = may or may not be admin
			// mentorsOnly = must not be admin
			if (user.isAdmin) {
				socket.join('admins');
			} else if (user.isMentor) {
				socket.join('mentorsOnly');
			}
			if (user.isMentor) {
				socket.join('mentors');
			}

			// eslint-disable-next-line no-console
			console.log(`${user.name} connected`);
		} else {
			this.user = null;
			// eslint-disable-next-line no-console
			console.log('An anonymous user connected');
		}

		(async () => {
			try {
				const initialState = await getInitialState(io, this.user);
				// Make sure the user hasn't disconnected while we are getting the initial state.
				if (this.socket) {
					this.socket.emit('action', { type: 'SOCKET_INITIAL_STATE', initialState });
				}
			} catch (err) {
				// eslint-disable-next-line no-console
				console.warn(err);
			}
		})();
	}

	disconnect() {
		// eslint-disable-next-line no-console
		if (this.user) {
			// eslint-disable-next-line no-console
			console.log(`${this.user.name} disconnected`);
		} else {
			// eslint-disable-next-line no-console
			console.log('An anonymous user disconnected');
		}
		this.socket = null;
	}

	async submitTicket(ticket) {
		if (!this.user) {
			return;
		}

		const requestorId = this.user[id];
		const { description, tableNum, contactInfo } = ticket;
		const newTicket = await Ticket.create(requestorId, description, tableNum, contactInfo);
		const action = {
			type: 'SOCKET_TICKET_NEW',
			newTicket: {
				...newTicket.toJSON(),
				requestorName: this.user.name
			}
		};

		// Notify admins and mentors that there is now a new ticket.
		this.io.to('admins').emit('action', action);
		this.io.to('mentorsOnly').emit('action', action);

		// Also notify the submitter that their new ticket has been acknowledged.
		if (!this.user.isAdmin && !this.user.isMentor) {
			this.io.to(requestorId).emit('action', action);
		}
	}

	async claimTicket(ticketId) {
		if (!this.user || !this.user.isMentor) {
			return;
		}

		const ticket = await Ticket.getById(ticketId);
		await ticket.claim(this.user[id]);

		// Notify admins and mentors that someone claimed a ticket.
		const action = {
			type: 'SOCKET_TICKET_CLAIMED',
			ticketId,
			mentorId: this.user[id],
			mentorName: this.user.name
		};
		this.io.to('admins').emit('action', action);
		this.io.to('mentorsOnly').emit('action', action);

		// Also notify the submitter that their ticket has been claimed.
		const requestor = await User.getById(ticket.requestorId);
		if (!requestor.isAdmin && !requestor.isMentor) {
			this.io.to(requestor[id]).emit('action', action);
		}
	}

	async unclaimTicket(ticketId) {
		if (!this.user || !this.user.isMentor) {
			return;
		}

		const ticket = await Ticket.getById(ticketId);
		await ticket.unclaim();

		// Notify admins and mentors that someone unclaimed a ticket.
		const action = { type: 'SOCKET_TICKET_UNCLAIMED', ticketId };
		this.io.to('admins').emit('action', action);
		this.io.to('mentorsOnly').emit('action', action);

		// Also notify the submitter that their ticket has been unclaimed.
		const requestor = await User.getById(ticket.requestorId);
		if (!requestor.isAdmin && !requestor.isMentor) {
			this.io.to(requestor[id]).emit('action', action);
		}
	}

	async resolveTicket(ticketId) {
		if (!this.user || !this.user.isMentor) {
			return;
		}

		const ticket = await Ticket.getById(ticketId);
		await ticket.resolve();

		// Notify admins and mentors that a ticket has been resolved.
		const action = { type: 'SOCKET_TICKET_RESOLVED', ticketId };
		this.io.to('admins').emit('action', action);
		this.io.to('mentorsOnly').emit('action', action);

		// Also notify the submitter that their ticket has been resolved.
		const requestor = await User.getById(ticket.requestorId);
		if (!requestor.isAdmin && !requestor.isMentor) {
			this.io.to(requestor[id]).emit('action', action);
		}
	}
}

module.exports = SocketController;
