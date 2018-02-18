'use strict';

const mongoose = require('mongoose');

// User Schema Definition
var userSchema = new mongoose.Schema({
	name: {type : String, required : true},
	isAdmin: Boolean,
	isMentor: Boolean,
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

userSchema.statics.create = function(name, GoogleID) {
	var user = new this({
		name: name,
		isAdmin: false,
		isMentor: false,
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
		mongoose.model('User', userSchema).findOne({googleID: GoogleID}, (err,user)=>{
			if(err) reject(err);
			else resolve(user);
		});
	});
}

userSchema.statics.delete = function(GoogleID)
{
	return new Promise((resolve, reject)=>{
		mongoose.model('User', userSchema).findOne({googleID: GoogleID}).remove((err,offer)=>{
			if(err) reject(err);
		});
	});
}


// Static: User.doSomething
// Instance method: 
// var user;
// user.doSomething()


userSchema.methods.setisAdminTo = function(becomeAdmin)
{
	this.isAdmin = becomeAdmin;
	console.log('set user name:' + this.name + ' isAdmin to ' + becomeAdmin);
	
	return new Promise((resolve, reject)=>{
		this.save((error, changedUser) => {
			if(error) reject(error);
			else resolve(changedUser);
			});
		});
}


userSchema.methods.setisMentorTo = function(becomeMentor)
{
	this.isMentor = becomeMentor;
	console.log('set user name: '+this.name+' isMentor to '+becomeMentor);

	return new Promise((resolve,reject)=>{
		this.save((err, changedUser)=>{
			if(err) reject(err);
			else resolve(changedUser);
		});
	});
}

userSchema.methods.addSkill = function(skill)
{
	//check whether skill exists, should i throw err, if yes how?
	var exists = false;
	for(var i = 0; i < this.skills.length; i++)
	{	
		if(this.skills[i]===skill){
			exists = true;
			break;
		}
	}
	if(!exists){
		this.skills.push(skill);
		console.log('skill: '+skill+' added')
	}

	return new Promise((resolve, reject)=>{
		this.save((err,skillfulUser)=>{
			if(err) reject(err);
			else resolve(skillfulUser);
		});
	});
}

userSchema.methods.removeSkill = function(skill)
{
	//assume the skill does exist
	this.skills.pop(skill);
	console.log('skill: '+skill+' removed')
	return new Promise((resolve,reject)=>{
		this.save((err,notSkillfulUser)=>{
			if(err) reject(err);
			else resolve(notSkillfulUser);
		});
	});
}


module.exports = mongoose.model('User', userSchema);





