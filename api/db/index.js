// Bring Mongoose into the app 
const mongoose = require('mongoose');
const config = require('../config');

// Build the connection string 
var dbURI = config.database.uri;

// Create the database connection 
mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
	console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
	console.log('Mongoose default connection error: ' + err);
});

module.exports = {
	User: require('./User')
};  