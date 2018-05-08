'use strict';

const User = require('../models/User'); // eslint-disable-line

function test(req, res) {
	res.json('/test endpoint hit');
}

function current(req, res) {
	res.json(req.user);
}

async function activeMentors(req, res, next) {
	try {
		const connectedUsers = await getConnectedRegistered(req);
		const activeMentors = [];
		for (const user of connectedUsers) {
			if (user.isMentor) {
				activeMentors.push(user);
			}
		}
		res.json(activeMentors);
	} catch (err) {
		next(err);
	}
}

async function update(req, res, next) {
	try {
		const user = await User.getById(req.params.id);
		const { mentor, admin } = req.query;
		if (mentor !== undefined) {
			await user.setMentorStatus(Boolean(mentor));
		}
		if (admin !== undefined) {
			await user.setAdminStatus(Boolean(admin));
		}
		res.json(user);
	} catch (err) {
		next(err);
	}
}

async function getAll(req, res, next) {
	try {
		const users = await User.getAll();
		res.json(users);
	} catch (err) {
		next(err);
	}
}

async function getConnectedRegistered(req) {
	const io = req.app.get('socketio');
	const rootNamespace = io.sockets;
	const connectedSockets = rootNamespace.connected;
	const activeUserIds = [];

	for (const socketID in connectedSockets) {
		const socket = connectedSockets[socketID];
		const { client } = socket;
		const req = client.request;
		const { passport } = req.session;

		if (passport) {
			const { user } = passport;
			activeUserIds.push(user._id);
		}
	}
	
	return Promise.all(activeUserIds.map(id => User.getById(id)));
}

module.exports = {
	test,
	current,
	activeMentors,
	getAll,
	update
};
