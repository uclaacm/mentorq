'use strict';

const Ticket = require('../models/Ticket');
const User = require('../models/User');

function index(req, res) {
	res.json('/ endpoint hit');
}

function test(req, res) {
	res.json('/test endpoint hit');
}

async function create(req, res) {
	res.json('/create endpoint hit');
	try {
		const requestor = await User.getById(req.body.user).__id;
		const { description, tableNum } = req.body.description;
		const newTicket = await Ticket.create(requestor, description, tableNum);
		res.json(newTicket);
	} catch (err) {
		throw err;
	}
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

async function resolve(req, res) {
	try {
		const ticket = await Ticket.getById(req.params.id);
		await ticket.resolve();
		res.json(ticket);
	} catch (err) {
		throw err;
	}
}

module.exports = {
	index,
	test,
	create,
	claim,
	unclaim,
	resolve
};
