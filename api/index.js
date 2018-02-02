const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const config = require('./config');

// Connect to database and declare database Models
const db = require('./db');
const User = db.User;

// Endpoints
app.get('/', (req, res) => {
	res.send("test endpoint");
});

server.listen(config.server.port, () => {
	console.log("Listening on port " + config.server.port);
});
