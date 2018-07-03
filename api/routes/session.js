'use strict';

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

const router = new express.Router();

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
	// eslint-disable-next-line global-require
	secret = require('../config/secret');
} catch (e) {
	// eslint-disable-next-line no-console
	console.error('*** You are missing the Google OAuth API usage keys. Please go to https://drive.google.com/file/d/1-04r3tR3cNEnvbyHNnlRCGEFav08kpx7/view?usp=sharing, download secret.json, and move it into api/config/');
	throw e;
}

if (secret) {
	passport.use(new GoogleStrategy({
		clientID: secret.web.client_id,
		clientSecret: secret.web.client_secret,
		callbackURL: '/auth/google/callback'
	}, async (token, tokenSecret, profile, done) => {
		try {
			let user = await User.read(profile.id);
			if (!user) {
				user = await User.create(profile.displayName, profile.emails[0].value, ' ', profile.id);
				// TODO: redirect to user to profile page
			}
			done(null, user);
		} catch (err) {
			done(err);
		}
	}));
}

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

module.exports = router;
