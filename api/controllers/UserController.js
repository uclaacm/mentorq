'use strict';

const User = require('../models/User'); // eslint-disable-line

function test(req, res) {
	res.json('/test endpoint hit');
}

function current(req, res) {
	res.json(req.user);
}

function getAll(req, res){
	User.getAll()
		.then(users => {
			res.json(users);
		})
		.catch(err => {
			console.error(err);
			res.status(500);
		});

}

module.exports = {
	test,
	current,
	getAll
};
