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

function numberOfActiveMentors(req, res) {
	var sess = req.sessionStore.sessions;
	var numMentors = 0;
	console.log(sess);
	for(var connection in sess){
		var connectionSess = JSON.parse(sess[connection]);
		var userObj = connectionSess['passport'];

		if (userObj) {	// if user is not logged in, won't check info
			console.log(userObj['user']['name']);
			console.log(userObj['user']['isMentor']);
			if(userObj['user']['isMentor'])
				numMentors++;
		}
	}
	res.json(numMentors);
}

module.exports = {
	index,
	test,
	current,
	numberOfActiveMentors
};