'use strict';

const Ticket = require('../models/Ticket');

function connect(socket) {
	// eslint-disable-next-line no-console
	console.log('A user connected');
	this.socket = socket;
}

function disconnect() {
	// eslint-disable-next-line no-console
	console.log('A user disconnected');
	this.socket = null;
}

function test(message) {
	// eslint-disable-next-line no-console
	console.log('Server received from client socket: ', message);
	this.socket.emit('action', { type: 'SOCKET_TEST', message: 'Hello from server!' });
}

async function addTicket(ticket) {
	const { requestorId, description, tableNum, contactInfo } = ticket;
	const newTicket = await Ticket.create(requestorId, description, tableNum, contactInfo);
	this.socket.emit('action', { type: 'SOCKET_NEW_TICKET', newTicket });
}

async function claimTicket(req) {
	const ticket = await Ticket.getById(req.params.id);
	const claimedTicket = await ticket.claim(req.params.mentor);
	this.socket.emit('action', { type: 'SOCKET_CLAIM_TICKET', claimedTicket });
}

async function unclaimTicket(req) {
	const ticket = await Ticket.getById(req.params.id);
	const unclaimedTicket = await ticket.unclaim();
	this.socket.emit('action', { type: 'SOCKET_UNCLAIM_TICKET', unclaimedTicket });
}

async function resolveTicket(req) {
	const ticket = await Ticket.getById(req.params.id);
	const resolvedTicket = await ticket.resolve();
	this.socket.emit('action', { type: 'SOCKET_RESOLVE_TICKET', resolvedTicket });
}

module.exports = {
	connect,
	disconnect,
	test,
	addTicket,
	claimTicket,
	unclaimTicket,
	resolveTicket
};
