'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Ticket;

var ticketSchema = Schema({
	requestor: {type: Schema.type.ObjectId, ref: 'User', required: true},
	mentor: {type: Schema.type.ObjectId, ref: 'User'},
	timeFiled: {type: Date, required: true},
	problem: {type: String, required: true},
	comments: String,
	tableNum: {type: String, required: true},
	isActive: {type: Boolean, default: true},
	isResolved: {type: Boolean, default: false}
});

ticketSchema.statics.create = function(requestor, problem, tableNum) {
	var ticket = new this({
		requestor: requestor,
		timeFiled: Date.now,
		problem: problem,
		tableNum: tableNum
	});
    
	return new Promise((resolve, reject) => {
		ticket.save((error, newTicket) => {
			if (error) reject(error);
			else resolve(newTicket);
		});
	});
};

ticketSchema.statics.addComments = function(comments) {
	this.comments = comments;

	return new Promise((resolve, reject) => {
		this.save((error, ticket) => {
			if (error) reject(error);
			else resolve(ticket);
		});
	});
};

ticketSchema.statics.claim = function(mentor) {
	this.mentor = mentor;
	this.isActive = false;

	return new Promise((resolve, reject) => {
		this.save((error, ticket) => {
			if (error) reject(error);
			else resolve(ticket);
		});
	});
};

ticketSchema.statics.resolve = function() {
	this.isResolved = true;

	return new Promise((resolve, reject) => {
		this.save((error, ticket) => {
			if (error) reject(error);
			else resolve(ticket);
		});
	});
};

Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;