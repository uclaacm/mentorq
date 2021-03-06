'use strict';

const User = require('../models-postgres/User');

function current(req, res) {
	res.json(req.user);
}

async function getActiveMentors(io) {
	const connectedUsers = await getConnectedRegistered(io);
	const activeMentors = [];
	for (const user of connectedUsers) {
		if (user.isMentor) {
			activeMentors.push(user);
		}
	}
	return activeMentors;
}

async function getActiveMentorsRoute(req, res, next) {
	try {
		const io = req.app.get('socketio');
		const activeMentors = await getActiveMentors(io);
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

function getConnectedRegistered(io) {
	const rootNamespace = io.sockets;
	const connectedSockets = rootNamespace.connected;
	const activeUserIds = new Set();

	for (const socketID in connectedSockets) {
		const socket = connectedSockets[socketID];
		const { client } = socket;
		const clientReq = client.request;
		const { user } = clientReq;
		if (user) {
			activeUserIds.add(user.id);
		}
	}

	return Promise.all([...activeUserIds].map(id => User.getById(id)));
}

module.exports = {
	current,
	getActiveMentors,
	getActiveMentorsRoute,
	getAll,
	update
};
