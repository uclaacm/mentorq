'use strict';

const socketio = require('socket.io');
const socketController = require('../controllers/SocketController');

module.exports = function (app, server) {
	const io = socketio.listen(server);

	// https://stackoverflow.com/questions/25532692/how-to-share-sessions-with-socket-io-1-x-and-express-4-x
	const sessionMiddleware = app.get('sessionMiddleware');
	io.use((socket, next) => {
		sessionMiddleware(socket.request, socket.request.res, next);
	});

	io.on('connection', socket => {
		socketController.connect(socket);

		socket.on('disconnect', socketController.disconnect);

		socket.on('action', action => {
			switch (action.type) {
			case 'socket/test':
				socketController.test(action.message);
				break;
			case 'socket/ticket/new':
				socketController.addTicket(action.ticket).catch(() => {});
				break;
			default:
				break;
			}
		});
	});
	return io;
};
