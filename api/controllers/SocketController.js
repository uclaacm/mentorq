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

module.exports = {
	connect,
	disconnect,
	test,
	addTicket
};
