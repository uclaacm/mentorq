'use strict';

const { getActiveMentors } = require('./UserController');

const Ticket = require('../models-postgres/Ticket');

/**
 * Get the initial Redux state corresponding to the given user.
 *
 * @param {User} user The newly connected user
 */
async function getInitialState(io, user) {
	if (!user) {
		return {
			user: {
				mentors: [],
				current: null
			},
			socket: {
				tickets: [],
				pendingTickets: 0
			}
		};
	}

	const [mentors, tickets] =
		await Promise.all([getActiveMentors(io), Ticket.getRelevantTickets(user)]);
	return {
		user: {
			mentors,
			current: user
		},
		socket: {
			tickets,
			pendingTickets: 0
		}
	};
}

module.exports = {
	getInitialState
};
