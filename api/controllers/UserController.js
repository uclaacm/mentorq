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

module.exports = {
	index,
	test,
	current
};