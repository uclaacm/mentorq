'use strict';

const mongoose = require('mongoose');

var User;

// User Schema Definition
var userSchema = new mongoose.Schema({
	name: {type: String , required: true},
	isAdmin: {type: Boolean , default: false},
	isMentor: {type: Boolean , default: false},
	skills: [String],
	googleId: {type: String , unique: true, required: true}
});

// User Schema Methods

/**
 * Creates and saves a User object in the database
 * @param {string} user's name
 * @param {string} user's GoogleID (as hash)
 * @returns {User} newly saved User object
 * @example
 * User.create('Joe Bruin', 'someGoogleIdHash')
 *     .then(user => console.log(user))
 *     .catch(error => console.error(error));
 */

userSchema.statics.create = function(name, googleId) {
	var user = new this({
		name: name,
		skills: [],
		googleId: googleId
	});

	return new Promise((resolve, reject) => {
		user.save((error, newUser) => {
			if (error) reject(error);
			else resolve(newUser);
		});
	});
};

/**
 * Read and Retrieve a User object from the database
 * @param {string} user's googleID (as hash)
 * @returns {User} one User object with matching ID
 * @example
 * User.read('someGoogleIdHash')
 *     .then(user => console.log(user))
 *     .catch(error => console.error(error));
 */

userSchema.statics.read = function(googleId) {
	return new Promise((resolve , reject) => {
		User.findOne({googleId: googleId}, (err, user) => {
			if (err) reject(err);
			else resolve(user);
		});
	});
};

/**
 * Read and Retrieve all User objects from the database
 * @returns {JavaScript Object} key: googleId, val: User Object
 * @example
 * User.readAll()
 *     .then(userDict => console.log(userDict))
 *     .catch(error => console.error(error));
 */

userSchema.statics.readAll = function(){
	return new Promise((resolve, reject) => {
		User.find({}, (err, users) => {
			if(err) reject(err);
			var userDict = {};

			users.forEach(function(user){
				userDict[user.googleId] = user;
			});
			resolve(userDict);
		});
	});
};

/**
 * Delete a User object from the database
 * @param {string} user's googleID (as hash)
 * @returns {void} nothing
 * @example
 * User.delete('someGoogleIdHash')
 *     .catch(error => console.error(error));
 */

userSchema.statics.delete = function(googleId) {
	return new Promise((resolve, reject) => {
		User.findOne({googleId: googleId}).remove((err, offer) => {
			if(err) reject(err);
			else resolve(offer);
		});
	});
};

/**
 * Change User's isAdmin status
 * @param {Boolean} User's new isAdmin status
 * @returns {User} changed user object
 * @example
 * User.read('someGoogleIdHash')
 *     .then(user =>  user.setAdminStatus(true))
 *	   .catch(error => console.error(error));
 */

userSchema.methods.setAdminStatus = function(adminStatus) {
	this.isAdmin = adminStatus;
	
	return new Promise((resolve, reject) => {
		this.save((error, user) => {
			if(error) reject(error);
			else resolve(user);
		});
	});
};

/**
 * Change User's isMentor status
 * @param {Boolean} User's new isMentor status
 * @returns {User} changed user object
 * @example
 * User.read('someGoogleIdHash')
 *     .then(user => user.setMentorStatus(true))
 *	   .catch(error => console.error(error));
 */

userSchema.methods.setMentorStatus = function(mentorStatus) {
	this.isMentor = mentorStatus;

	return new Promise((resolve, reject) => {
		this.save((err, user) => {
			if(err) reject(err);
			else resolve(user);
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
 * User.read('someGoogleIdHash')
 *     .then(user => user.addSkill('python'))
 *	   .catch(error => console.error(error));
 */

userSchema.methods.addSkill = function(skill) {
	// skill does not exist if index is -1;
	// skill exists already if index is >=0;
	const index = this.skills.indexOf(skill);

	if (index >= 0){
		return new Promise(new Error('skill: '+ skill +' already exists!'));
	}

	this.skills.push(skill);

	return new Promise((resolve, reject) => {
		this.save((err, user) => {
			if (err) reject(err);
			else resolve(user);
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
 * User.read('someGoogleIdHash')
 *     .then(user => user.removeSkill('python'))
 *	   .catch(error => console.error(error));
 */

userSchema.methods.removeSkill = function(skill) {
	const index = this.skills.indexOf(skill);

	if (index < 0){
		return new Promise(new Error('skill: '+ skill +' does not exists!'));
	}

	this.skills.splice(index, 1);

	return new Promise((resolve, reject) => {
		this.save((err, user) => {
			if (err) reject(err);
			else resolve(user);
		});
	});
};

User = mongoose.model('User', userSchema);

module.exports = User;