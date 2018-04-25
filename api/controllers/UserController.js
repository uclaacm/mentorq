'use strict';

const User = require('../models/User'); // eslint-disable-line

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
		const { passport } = req.session;

		if (passport) {
			const { user } = passport;
			if (user.isMentor) {
				activeMentors.push(user);
			}
		}
	}
	res.json(activeMentors);
}

function update(req, res) {
	User.getById(req.params.id)
		.then(user => {
			if (req.query.mentor) {
				return user.setMentorStatus(req.query.mentor);
			}
			return user;
		})
		.then (user => {
			if (req.query.admin) {
				return user.setAdminStatus(req.query.admin);
			}
			return user;
		})
		.then(user => res.json(user))
		.catch(err => res.status(500).json({ err: err.message }));
}

function getAll(req, res) {
	User.getAll()
		.then(users => {
			res.json(users);
		})
		.catch(err => {
			console.error(err);
			res.status(500).json({ err: err.message });
		});

}

module.exports = {
	test,
	current,
	activeMentors,
	getAll,
	update
};
