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
	var sess = req.sessionStore.sessions;
	var activeMentors = [];

	for(var connection in sess){
		var connectionSess = JSON.parse(sess[connection]);
		var userObj = connectionSess['passport'];

		if (userObj && userObj['user']['isMentor']) {	// if user is not logged in, won't check info
			activeMentors.push(userObj['user']);
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