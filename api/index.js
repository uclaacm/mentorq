'use strict';

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const cors = require('cors');
const config = require('./config');

// Connect to database
const { User } = require('./models');

app.use(cors({
	credentials: true,
	origin: true
}));

// Set up router endpoints
const sessionMiddleware = require('./routes/session');
app.use(sessionMiddleware);
app.set('sessionMiddleware', sessionMiddleware);
const authRouter = require('./routes/auth');
app.use('/auth', authRouter);
const userRouter = require('./routes/user');
app.use('/user', userRouter);
const ticketRouter = require('./routes/ticket');
app.use('/ticket', ticketRouter);
const socketio = require('./routes/socket')(app, server);
app.set('socketio', socketio);

// Express forces us to have four parameters for the error handler, even if
// some of them are unused.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
	res.status(500).json({ err: err.message });
});

User.create('Joe Bruin', 'bleh9')
	.then(user => {
		console.log(user);
		return user.updateName('Connie');
	})
	.catch(error => console.error(error));

server.listen(config.server.port, () => {
	console.log('Listening on port ' + config.server.port);
});
