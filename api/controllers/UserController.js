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
		const { client } = socket;
		const req = client.request;
		const passport = req.session.passport;

		if (passport) {
			const user = passport.user;
			if (user.isMentor) {
				activeMentors.push(user);
			}
		}
	}
	res.json(activeMentors);
}



module.exports = {
	index,
	test,
	current,
	activeMentors
};
