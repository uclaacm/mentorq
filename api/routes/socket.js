'use strict';

module.exports = function (server) {
	const io = require('socket.io').listen(server);
	const socketController = require('../controllers/SocketController');

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
	});
};