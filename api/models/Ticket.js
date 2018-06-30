'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

let Ticket;

const ticketSchema = new Schema({
	requestor: { type: Schema.ObjectId, ref: 'User', required: true },
	mentor: { type: Schema.ObjectId, ref: 'User' },
	timeFiled: { type: Date, required: true },
	description: { type: String, required: true },
	tableNum: { type: String, required: true },
	isActive: { type: Boolean, default: true },
	isResolved: { type: Boolean, default: false }
});

ticketSchema.statics.create = function (requestor, description, tableNum) {
	const ticket = new this({
		requestor,
		timeFiled: Date.now,
		description,
		tableNum
	});

	return new Promise((resolve, reject) => {
		ticket.save((error, newTicket) => {
			if (error) {
				reject(error);
			} else {
				resolve(newTicket);
			}
		});
	});
};

/**
 * Read and Retrieve a Ticket object from the database
 * @param {string} ticket's MongoDB ID
 * @returns {User} one Ticket object with matching ID
 * @example
 * const ticket = await Ticket.getById('someId');
 * console.log(ticket);
 */

ticketSchema.statics.getById = function (id) {
	return new Promise((resolve, reject) => {
		Ticket.findById(id, (err, user) => {
			if (err) {
				reject(err);
			} else {
				resolve(user);
			}
		});
	});
};

ticketSchema.statics.claim = function (mentor) {
	this.mentor = mentor;
	this.isActive = false;

	return new Promise((resolve, reject) => {
		this.save((error, ticket) => {
			if (error) {
				reject(error);
			} else {
				resolve(ticket);
			}
		});
	});
};

ticketSchema.statics.unclaim = function () {
	this.mentor = null;
	this.isActive = true;

	return new Promise((resolve, reject) => {
		this.save((error, ticket) => {
			if (error) {
				reject(error);
			} else {
				resolve(ticket);
			}
		});
	});
};

ticketSchema.statics.resolve = function () {
	this.isResolved = true;

	return new Promise((resolve, reject) => {
		this.save((error, ticket) => {
			if (error) {
				reject(error);
			} else {
				resolve(ticket);
			}
		});
	});
};

Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
