'use strict';

const mongoose = require('mongoose');

let User;

// User Schema Definition
const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, default: '' },
	isAdmin: { type: Boolean, default: false },
	isMentor: { type: Boolean, default: false },
	skills: [String],
	googleId: { type: String, unique: true, required: true }
});

// User Schema Methods

/**
 * Creates and saves a User object in the database
 * @param {string} user's name
 * @param {string} user's email
 * @param {string} user's phone number
 * @param {string} user's GoogleID (as hash)
 * @returns {User} newly saved User object
 * @example
 * const user = await User.create('Joe Bruin', 'email', 'phone', 'someGoogleIdHash');
 * console.log(user);
 */

userSchema.statics.create = function (name, email, phone, googleId) {
	const user = new this({
		name,
		email,
		phone,
		skills: [],
		googleId
	});

	return new Promise((resolve, reject) => {
		user.save((error, newUser) => {
			if (error) {
				reject(error);
			} else {
				resolve(newUser);
			}
		});
	});
};

/**
 * Read and Retrieve a User object from the database
 * @param {string} user's googleID (as hash)
 * @returns {User} one User object with matching ID
 * @example
 * const user = await User.read('someGoogleIdHash');
 * console.log(user);
 */

userSchema.statics.read = function (googleId) {
	return new Promise((resolve, reject) => {
		User.findOne({ googleId }, (err, user) => {
			if (err) {
				reject(err);
			} else {
				resolve(user);
			}
		});
	});
};

/**
 * Read and Retrieve a User object from the database
 * @param {string} user's MongoDB ID
 * @returns {User} one User object with matching ID
 * @example
 * const user = await User.getById('someId');
 * console.log(user);
 */

userSchema.statics.getById = function (id) {
	return new Promise((resolve, reject) => {
		User.findById(id, (err, user) => {
			if (err) {
				reject(err);
			} else {
				resolve(user);
			}
		});
	});
};

/**
 * Read and Retrieve all User objects from the database
 * @returns {User[]} an array of User objects
 * @example
 * const users = await User.getAll();
 * console.log(users);
 */

userSchema.statics.getAll = function () {
	return new Promise((resolve, reject) => {
		User.find({}, (err, users) => {
			if (err) {
				reject(err);
			}
			resolve(users);
		});
	});
};

/**
 * Change User's isAdmin status
 * @param {Boolean} User's new isAdmin status
 * @returns {User} changed user object
 * @example
 * const user = await User.read('someGoogleIdHash');
 * await user.setAdminStatus(true);
 */

userSchema.methods.setAdminStatus = function (adminStatus) {
	this.isAdmin = adminStatus;

	return new Promise((resolve, reject) => {
		this.save((error, user) => {
			if (error) {
				reject(error);
			} else {
				resolve(user);
			}
		});
	});
};

/**
 * Change User's isMentor status
 * @param {Boolean} User's new isMentor status
 * @returns {User} changed user object
 * @example
 * const user = await User.read('someGoogleIdHash');
 * await user.setMentorStatus(true);
 */

userSchema.methods.setMentorStatus = function (mentorStatus) {
	this.isMentor = mentorStatus;

	return new Promise((resolve, reject) => {
		this.save((err, user) => {
			if (err) {
				reject(err);
			} else {
				resolve(user);
			}
		});
	});
};

User = mongoose.model('User', userSchema);

module.exports = User;
