'use strict';

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socket_io = require('socket.io');

const config = require('./config');

server.listen(config.server.port);
var io = socket_io();

io.attach(server);
io.on('connection', function(socket){
	console.log('Socket connected: ' + socket.id);
	socket.on('action', (action) => {
		if(action.type === 'server/hello'){
			console.log('Got hello data!', action.data);
			socket.emit('action', {type:'socket', data:'good day!'});
		}
	});
});

// Connect to database
require('./models');

// Set up router endpoints
const userRouter = require('./routes/user');
app.use('/user', userRouter);