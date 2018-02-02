'use strict';

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const config = require('./config');

// Connect to database
const db = require('./models');

// Get routers
const userRouter = require('./routes/user');

// Endpoints
app.get('/', (req, res) => {
	res.send("test endpoint");
});

// Set up router endpoints
app.use("/user", userRouter);

server.listen(config.server.port, () => {
	console.log("Listening on port " + config.server.port);
});
