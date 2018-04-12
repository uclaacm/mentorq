'use strict';

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const cors = require('cors');
const config = require('./config');

// Connect to database
require('./models');

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

server.listen(config.server.port, () => {
	console.log('Listening on port ' + config.server.port);
});
