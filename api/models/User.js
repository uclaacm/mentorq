'use strict';

const mongoose = require('mongoose');

// User Schema Definition
var userSchema = new mongoose.Schema({
	name: String
});

// User Schema Methods

/**
 * Creates and saves a User object in the database
 * @param {string} user's name
 * @returns {User} newly saved User object
 * @example
 * User.create("Joe Bruin")
 *     .then(user => console.log(user))
 *     .catch(error => console.error(error));
 */
userSchema.statics.create = function(name) {
	var user = new this({
		name: name
	});

	return new Promise((resolve, reject) => {
		user.save((error, newUser) => {
			if (error) reject(error);
			else resolve(newUser);
		});
	});
};

module.exports = mongoose.model('User', userSchema);
