'use strict';

const Ticket = require('../models/Ticket'); // eslint-disable-line

function index(req, res) {
	res.json('/ endpoint hit');
}

function test(req, res) {
	res.json('/test endpoint hit');
}

module.exports = {
	index,
	test
};