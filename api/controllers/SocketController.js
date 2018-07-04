'use strict';

const Ticket = require('../models/Ticket');

class SocketController {
	constructor(io, socket) {
		this.io = io;
		this.socket = socket;
		const { passport } = socket.client.request.session;

		if (passport) {
			const { user } = passport;
			this.user = user;

			// Allows us to use this.io.to() directly on a user's MongoDB ID.
			socket.join(user._id);

			// Make the admin room and mentor room disjoint:
			// admins = may or may not be mentor
			// mentors = must not be admin
			if (user.isAdmin) {
				socket.join('admins');
			} else if (user.isMentor) {
				socket.join('mentors');
			}

			// eslint-disable-next-line no-console
			console.log(`${user.name} connected`);
		} else {
			this.user = null;
			// eslint-disable-next-line no-console
			console.log('An anonymous user connected');
		}
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

	test(message) {
		// eslint-disable-next-line no-console
		console.log('Server received from client socket: ', message);
		this.socket.emit('action', { type: 'SOCKET_TEST', message: 'Hello from server!' });
	}

	async submitTicket(ticket) {
		if (!this.user) {
			return;
		}

		const requestorId = this.user._id;
		const { description, tableNum, contactInfo } = ticket;
		const newTicket = await Ticket.create(requestorId, description, tableNum, contactInfo);

		// Notify admins and mentors that there is now a new ticket.
		this.io.to('admins').emit('action', { type: 'SOCKET_TICKET_NEW', newTicket });
		this.io.to('mentors').emit('action', { type: 'SOCKET_TICKET_NEW', newTicket });

		// Also notify the submitter that their new ticket has been acknowledged.
		this.io.to(requestorId).emit('action', { type: 'SOCKET_TICKET_NEW', newTicket });
	}

	async claimTicket(ticketId) {
		if (!this.user || !this.user.isMentor) {
			return;
		}

		const ticket = await Ticket.getById(ticketId);
		await ticket.claim(this.user._id);

		// Notify admins and mentors that someone claimed a ticket.
		const action = {
			type: 'SOCKET_TICKET_CLAIMED',
			ticketId,
			mentorId: this.user._id,
			mentorName: this.user.name
		};
		this.io.to('admins').emit('action', action);
		this.io.to('mentors').emit('action', action);

		// Also notify the submitter that their ticket has been claimed.
		this.io.to(ticket.requestorId).emit('action', action);
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
		this.io.to('mentors').emit('action', action);

		// Also notify the submitter that their ticket has been unclaimed.
		this.io.to(ticket.requestorId).emit('action', action);
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
		this.io.to('mentors').emit('action', action);

		// Also notify the submitter that their ticket has been resolved.
		this.io.to(ticket.requestorId).emit('action', action);
	}
}

module.exports = SocketController;
