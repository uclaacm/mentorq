'use strict';

// Bring Mongoose into the app
const mongoose = require('mongoose');
const config = require('../config');

const User = require('./User');
const Ticket = require('./Ticket');

// Build the connection string
const dbURI = config.database.uri;

// Create the database connection
mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
	// eslint-disable-next-line no-console
	console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error', err => {
	// eslint-disable-next-line no-console
	console.log('Mongoose default connection error: ' + err);
});

module.exports = {
	User,
	Ticket
};
