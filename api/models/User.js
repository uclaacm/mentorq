'use strict';

const mongoose = require('mongoose');

// User Schema Definition
var userSchema = new mongoose.Schema({
	name: {type : String, required : true},
	isAdmin: {type: Boolean,default:false},
	isMentor: {type: Boolean,default:false},
	skills: [String]	,
	googleID: { type : String , unique : true, required : true }
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
 
var User;

userSchema.statics.create = function(name, GoogleID) {
	var user = new this({
		name: name,
		skills:[],
		googleID: GoogleID
	});

	return new Promise((resolve, reject) => {
		user.save((error, newUser) => {
			if (error) reject(error);
			else resolve(newUser);
		});
	});
};

userSchema.statics.read = function(GoogleID)
{
	return new Promise((resolve , reject) => {
		User.findOne({googleID: GoogleID}, (err,user)=>{
			if(err) reject(err);
			else resolve(user);
		});
	});
};

userSchema.statics.delete = function(GoogleID)
{
	return new Promise((resolve, reject)=>{
		User.findOne({googleID: GoogleID}).remove((err,offer)=>{
			if(err) reject(err);
			resolve(offer);
		});
	});
};


// Static: User.doSomething
// Instance method: 
// var user;
// user.doSomething()


userSchema.methods.setAdminStatus = function(adminStatus)
{
	this.isAdmin = adminStatus;
	
	return new Promise((resolve, reject)=>{
		this.save((error, user) => {
			if(error) reject(error);
			resolve(user);
		});
	});
};


userSchema.methods.setMentorStatus = function(mentorStatus)
{
	this.isMentor = mentorStatus;

	return new Promise((resolve,reject)=>{
		this.save((err, user)=>{
			if(err) reject(err);
			else resolve(user);
		});
	});
};

userSchema.methods.addSkill = function(skill)
{
	//skill does not exist if index is -1;
	//skill exists already if index is >=0;
	const index = this.skills.indexOf(skill);

	if(index >=0 ){
		return new Promise(new Error('skill: '+skill+' already exists !'));
	}

	this.skills.push(skill);

	return new Promise((resolve, reject)=>{
		this.save((err,user)=>{
			if(err) reject(err);
			else resolve(user);
		});
	});
};

userSchema.methods.removeSkill = function(skill)
{
	const index = this.skills.indexOf(skill);

	if(index < 0 ){
		return new Promise(new Error('skill: '+skill+' does not exists !'));
	}

	this.skills.splice(index,1);

	return new Promise((resolve,reject)=>{
		this.save((err,user)=>{
			if(err) reject(err);
			else resolve(user);
		});
	});
};

User = mongoose.model('User', userSchema);

module.exports = User;