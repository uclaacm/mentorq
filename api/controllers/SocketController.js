'use strict';

function connect(socket) {
	console.log('A user connected');
	this.socket = socket;
}

function disconnect() {
	console.log('A user disconnected');
	this.socket = null;
}

function test(message) {
	console.log('Server received from client socket: ', message);
	this.socket.emit('action', { type: 'SOCKET_TEST', message: 'Hello from server!' });
}

function addTicket(ticket) {
	this.socket.emit('action', { type: 'SOCKET_NEW_TICKET', ticket });
}

module.exports = {
	connect,
	disconnect,
	test,
	addTicket
};