'use strict';

const mongoose = require('mongoose');

let User;

// User Schema Definition
const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: true },
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
 * Delete a User object from the database
 * @param {string} user's googleID (as hash)
 * @returns {void} nothing
 * @example
 * await User.delete('someGoogleIdHash');
 */

userSchema.statics.delete = function (googleId) {
	return new Promise((resolve, reject) => {
		User.findOne({ googleId }).remove((err, offer) => {
			if (err) {
				reject(err);
			} else {
				resolve(offer);
			}
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

/**
 * Add a new skill to the User object
 * If attempt to add a skill that already exists,
 * an error will be thrown
 * @param {string} User's new skill
 * @returns {User} changed user object
 * @example
 * const user = await User.read('someGoogleIdHash');
 * await user.addSkill('python');
 */

userSchema.methods.addSkill = function (skill) {
	// skill does not exist if index is -1;
	// skill exists already if index is >=0;
	const index = this.skills.indexOf(skill);

	if (index >= 0) {
		return new Promise(new Error('skill: ' + skill + ' already exists!'));
	}

	this.skills.push(skill);

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

/**
 * Remove a skill from the User object
 * If attempt to remove a skill that does not exists,
 * an error will be thrown
 * @param {string} skill to remove from the User object
 * @returns {User} changed user object
 * @example
 * const user = await User.read('someGoogleIdHash');
 * await user.removeSkill('python');
 */

userSchema.methods.removeSkill = function (skill) {
	const index = this.skills.indexOf(skill);

	if (index < 0) {
		return new Promise(new Error('skill: ' + skill + ' does not exists!'));
	}

	this.skills.splice(index, 1);

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

/*
 * Update name for the User object
 * @param {string} name to update the User object
 * @returns {User} changed user object
 */

userSchema.methods.updateName = function (name) {
	this.name = name;

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

/*
 * Update email for the User object
 * @param {string} email to update the User object
 * @returns {User} changed user object
 */

userSchema.methods.updateEmail = function (email) {
	this.email = email;

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

/*
 * Update phone for the User object
 * @param {string} phone to update the User object
 * @returns {User} changed user object
 */
userSchema.methods.updatePhone = function (phone) {
	this.phone = phone;

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
