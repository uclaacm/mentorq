'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

let Ticket;

const ticketSchema = new Schema({
	requestorId: { type: Schema.ObjectId, ref: 'User', required: true },
	mentorId: { type: Schema.ObjectId, ref: 'User' },
	contactInfo: { type: String, required: false },
	timeFiled: { type: Number, required: true },
	description: { type: String, required: true },
	tableNum: { type: String, required: true },
	isActive: { type: Boolean, default: true },
	isResolved: { type: Boolean, default: false }
});

/**
 * Creates and saves a Ticket object in the database
 * @param {ObjectID} requestorId ID of the user filing the ticket
 * @param {string} description description of the issue
 * @param {string} tableNum table number of the requestor
 * @param {string} contactInfo contact information (email/phone) of requestor
 * @returns {Promise<Ticket>} promise that resolves to newly saved Ticket object
 * @example
 * const JoeBruin = await User.getById('#id');
 * const ticket = await Ticket.create(JoeBruin, "Need help with MongoDB", "13");
 * console.log(ticket);
 */
ticketSchema.statics.create = function (requestorId, description, tableNum, contactInfo) {
	const ticket = new this({
		requestorId,
		timeFiled: Date.now(),
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

ticketSchema.statics.claim = function (mentorId) {
	this.mentorId = mentorId;
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
	this.mentorId = null;
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

ticketSchema.statics.getRelevantTickets = async function (user) {
	const query = this.find();
	query.setOptions({ lean: true });
	query.populate({
		path: 'requestorId',
		select: 'name'
	});
	query.populate({
		path: 'mentorId',
		select: 'name'
	});

	if (user.isAdmin) {
		// If the user is an admin, every unresolved ticket is relevant.
		query.find({ isResolved: false });
	} else if (user.isMentor) {
		// If the user is a mentor, all unresolved tickets the user claimed + all
		// unclaimed tickets are relevant.
		query.or([{ isResolved: false, mentorId: user._id }, { isActive: true }]);
	} else {
		// If the user is neither, all unresolved tickets requested by the student
		// are relevant.
		query.find({ isResolved: false, requestorId: user._id });
	}

	const res = await query.exec();
	for (const ticket of res) {
		const requestorId = ticket.requestorId._id;
		const requestorName = ticket.requestorId.name;
		ticket.requestorId = requestorId;
		ticket.requestorName = requestorName;

		if (ticket.mentorId) {
			const mentorId = ticket.mentorId._id;
			const mentorName = ticket.mentorId.name;
			ticket.mentorId = mentorId;
			ticket.mentorName = mentorName;
		}
	}
	return res;
};

Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
