'use strict';

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const config = require('./config');

// Connect to database
require('./models');

// Set up router endpoints
const userRouter = require('./routes/user');
app.use('/user', userRouter);

// include user database
const User = require('./models/User');


User.create('Joe Bruin', 'googleID')
	.then(user => console.log(user))
	.catch(error => console.error(error));


User.read('googleID',(err, user)=>{
	if(err) console.log(err);
	else{
		console.log(user);
		return user;
	}

}).then((user)=>{
	user.setisAdminTo(true);
	console.log(user);
	return user;
});


/*
//test for functions

User.findOne({googleID:"googleID"},(err,user)=>{

	user.setisAdminTo(false);
	return user;

})	.then((user) => {
		console.log(user);
		user.setisAdminTo(true);
		return user;
	})

	.then((user) => {
		console.log(user);
		user.setisAdminTo(true);
		return user;
	})

	.then((user) => {
		console.log(user);
		user.setisMentorTo(true);
		return user;
	})

	.then((user) => {
		console.log(user);
		user.setisMentorTo(true);
		return user;
	})

	.then((user) => {
		console.log(user);
		user.setisMentorTo(false);
		return user;
	})

	.then((user) => {
		console.log(user);
		user.addSkill('nodejs');
		return user;
	})

	.then((user) => {
		console.log(user);
		user.addSkill('python');
		return user;
	})

	.then((user) => {
		console.log(user);
		user.addSkill('python');
		return user;
	})

	.then((user) => {
		console.log(user);
		user.removeSkill('python');
		return user;
	})

	.catch(err=>console.error(err));


User.read('googleID').then((err,user)=>{
	if(err) console.error(err);
	else user.removeSkill('nodejs').then((err,user)=>{console.log(user)});
}); 


User.delete('googleID', (err, offer)=>{
	return err;
}).then(err=>console.log(err))
.catch(err=>console.log(err));

*/

server.listen(config.server.port, () => {
	console.log('Listening on port ' + config.server.port);
});
