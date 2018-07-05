'use strict';

const Ticket = require('../models/Ticket');
const { getActiveMentors } = require('./UserController');

/**
 * Get the initial Redux state corresponding to the given user.
 *
 * @param {User} user The newly connected user
 */
async function getInitialState(io, user) {
	const [mentors, tickets] =
		await Promise.all([getActiveMentors(io), Ticket.getRelevantTickets(user)]);
	return {
		user: {
			mentors,
			current: user
		},
		socket: {
			tickets
		}
	};
}

module.exports = {
	getInitialState
};
