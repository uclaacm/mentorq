'use strict';

const { getActiveMentors } = require('./UserController');

const config = require('../config');
/* eslint-disable global-require */
let Ticket;
if (config.enablePostgres) {
	Ticket = {
		getRelevantTickets() {
			return [];
		}
	};
} else {
	Ticket = require('../models/Ticket');
}
/* eslint-enable global-require */

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
