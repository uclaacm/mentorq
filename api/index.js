'use strict';

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const config = require('./config');

// Connect to database
const db = require('./models');

// Set up router endpoints
const userRouter = require('./routes/user');
app.use("/user", userRouter);

server.listen(config.server.port, () => {
	console.log("Listening on port " + config.server.port);
});
