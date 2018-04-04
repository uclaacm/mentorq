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
const authRouter = require('./routes/auth')(app);
app.use('/auth', authRouter);
const userRouter = require('./routes/user');
app.use('/user', userRouter);

server.listen(config.server.port, () => {
	console.log('Listening on port ' + config.server.port);
});