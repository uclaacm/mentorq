'use strict';

module.exports = function (app, server) {
	const io = require('socket.io').listen(server);
	const socketController = require('../controllers/SocketController');

	// https://stackoverflow.com/questions/25532692/how-to-share-sessions-with-socket-io-1-x-and-express-4-x
	const sessionMiddleware = app.get('sessionMiddleware');
	io.use((socket, next) => {
		sessionMiddleware(socket.request, socket.request.res, next);
	});

	io.on('connection', (socket) => {
		socketController.connect(socket);

		socket.on('disconnect', socketController.disconnect);

		socket.on('action', (action) => {
			switch (action.type) {
			case 'socket/test':
				socketController.test(action.message);
				break;
			default:
				break;
			}
		});
		/*
		socket.on('activeMentor', () => {
			this.socket.emit('activeMentor', { message: "db3141"});
		});*/
	});
	return io;
};
