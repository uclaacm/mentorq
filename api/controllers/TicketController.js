'use strict';

const Ticket = require('../models/Ticket');

function index(req, res) {
	res.json('/ endpoint hit');
}

function test(req, res) {
	res.json('/test endpoint hit');
}

async function claim(req, res) {
	try {
		const ticket = await Ticket.getById(req.params.id);
		const mentor = req.query;
		if (mentor !== undefined) {
			await ticket.claim(mentor);
		}
		res.json(ticket);
	} catch (err) {
		throw err;
	}
}

async function unclaim(req, res) {
	try {
		const ticket = await Ticket.getById(req.params.id);
		await ticket.unclaim();
		res.json(ticket);
	} catch (err) {
		throw err;
	}
}

module.exports = {
	index,
	test,
	claim,
	unclaim
};
