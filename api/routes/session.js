'use strict';

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

const router = express.Router();

// Initialize user session
router.use(session({
	secret: 'deadbeef 314',
	resave: true,
	saveUninitialized: true
}));
router.use(passport.initialize());
router.use(passport.session());

let secret;
try {
	// Obtained from https://drive.google.com/file/d/1-04r3tR3cNEnvbyHNnlRCGEFav08kpx7/view?usp=sharing
	secret = require('../config/secret');
} catch (e) {
	throw `${e}\n*** You are missing the Google OAuth API usage keys. Please go to https://drive.google.com/file/d/1-04r3tR3cNEnvbyHNnlRCGEFav08kpx7/view?usp=sharing, download secret.json, and move it into api/config/`;
}

if (secret) {
	passport.use(new GoogleStrategy({
		clientID: secret.web.client_id,
		clientSecret: secret.web.client_secret,
		callbackURL: '/auth/google/callback'
	}, function (token, tokenSecret, profile, done) {
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
	}));
}

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});

module.exports = router;
