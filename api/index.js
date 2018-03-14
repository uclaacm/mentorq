'use strict';

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const config = require('./config');

// Connect to database
require('./models');

// Set up router endpoints
const userRouter = require('./routes/user');
app.use('/user', userRouter);
require('./routes/socket')(server);
const User = require('./models/User');

// For passport user cookie
const session = require('express-session');
app.use(session({
	secret: 'deadbeef 314',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// ACM hack's credential
const GOOGLE_CONSUMER_KEY = '572467714735-ef2es67vrvtq2k016k55jtvvbpcnippv.apps.googleusercontent.com';
const GOOGLE_CONSUMER_SECRET = '9a1ZFf6XaDRiwAzYxLNSBcMw';

passport.use(new GoogleStrategy({
	clientID: GOOGLE_CONSUMER_KEY,
	clientSecret: GOOGLE_CONSUMER_SECRET,
	callbackURL: 'http://localhost:'+config.server.port+'/auth/google/callback'
},
function(token, tokenSecret, profile, done){
	User.read(profile.id).then(user => {
		if (!user) {
			User.create(profile.displayName, profile.id).then(user => {
				// TODO: redirect to user to profile page
				return done(null, user);
			});
		} else {
			return done(null, user);
		}
	});
}
));

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
	passport.authenticate('google', { failureRedirect: '/auth/google' }), (req, res) => {
		res.redirect('http://localhost:3000');
	});

server.listen(config.server.port, () => {
	console.log('Listening on port ' + config.server.port);
});