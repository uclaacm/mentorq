'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

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

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
