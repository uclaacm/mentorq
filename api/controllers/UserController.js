'use strict';

const User = require('../models/User'); // eslint-disable-line

function index(req, res) {
	res.json('/ endpoint hit');
}

function test(req, res) {
	res.json('/test endpoint hit');
}

function current(req, res) {
	res.json(req.user);
}

function activeMentors(req, res) {
	const io = req.app.get('socketio');

	const rootNamespace = io.sockets;

	const connectedSockets = rootNamespace.connected;

	const activeMentors = [];

	for (const socketID in connectedSockets) {
		const socket = connectedSockets[socketID];
		const { client } = socket; // https://socket.io/docs/server-api/#socket-client
		const req = client.request; // https://socket.io/docs/server-api/#client-request

		console.log(req);
		// Now you can access the req.session object you were looking for
		// in the first place.
	}
	/*		Galen's old method
	var sess = req.sessionStore.sessions;

	for(var connection in sess){
		console.log(sess[connection]);
		var connectionSess = JSON.parse(sess[connection]);
		var userObj = connectionSess['passport'];

		if (userObj && userObj['user']['isMentor']) {	// if user is not logged in, won't check info
			activeMentors.push(userObj['user']);
		}
	}
	*/
	res.json(activeMentors);
}



module.exports = {
	index,
	test,
	current,
	activeMentors
};