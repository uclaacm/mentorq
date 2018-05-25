'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema({
	requestorId: { type: Schema.ObjectId, ref: 'User', required: true },
	mentor: { type: Schema.ObjectId, ref: 'User' },
	contactInfo: { type: String, required: false },
	timeFiled: { type: Date, required: true },
	description: { type: String, required: true },
	tableNum: { type: String, required: true },
	isActive: { type: Boolean, default: true },
	isResolved: { type: Boolean, default: false }
});

/**
 * Creates and saves a Ticket object in the database
 * @param {string(UserID)} requestorId the Id of the user who created the ticket
 * @param {string} description description of the issue
 * @param {string} tableNum table number of the requestor
 * @param {string} contactInfo contact information (email/phone) of requestor
 */
ticketSchema.statics.create = function (requestorId, description, tableNum, contactInfo) {
	const ticket = new this({
		requestorId,
		timeFiled: new Date(),
		description,
		tableNum,
		contactInfo
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
