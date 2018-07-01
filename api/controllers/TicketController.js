'use strict';

const Ticket = require('../models/Ticket');

function index(req, res) {
	res.json('/ endpoint hit');
}

function test(req, res) {
	res.json('/test endpoint hit');
}

async function add(ticket) {
	const { requestorId, description, tableNum, contactInfo } = ticket;
	const newTicket = await Ticket.create(requestorId, description, tableNum, contactInfo);
	this.socket.emit('action', { type: 'SOCKET_NEW_TICKET', newTicket });
}

async function claim(req) {
	const ticket = await Ticket.getById(req.params.id);
	const claimedTicket = await ticket.claim(req.params.mentor);
	this.socket.emit('action', { type: 'SOCKET_CLAIM_TICKET', claimedTicket });
}
async function unclaim(req) {
	const ticket = await Ticket.getById(req.params.id);
	const unclaimedTicket = await ticket.unclaim();
	this.socket.emit('action', { type: 'SOCKET_UNCLAIM_TICKET', unclaimedTicket });
}

async function resolve(req) {
	const ticket = await Ticket.getById(req.params.id);
	const resolvedTicket = await ticket.resolve();
	this.socket.emit('action', { type: 'SOCKET_RESOLVE_TICKET', resolvedTicket });
}

module.exports = {
	index,
	test,
	add,
	claim,
	unclaim,
	resolve
};
