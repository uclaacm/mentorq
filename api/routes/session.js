'use strict';

const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('../config');
const { sequelize } = require('../models-postgres/index');

/* eslint-disable global-require */
let User;
let id;
if (config.enablePostgres) {
	User = require('../models-postgres/User');
	id = 'id';
} else {
	User = require('../models/User');
	id = '_id';
}
/* eslint-enable global-require */

const router = new express.Router();

// Initialize user session
const sessionStore = new SequelizeStore({
	db: sequelize
});

const sessionSecret = process.env.NODE_ENV === 'production' ? require('../config/session-secret') : 'deadbeef 314';
router.use(session({
	store: sessionStore,
	secret: sessionSecret,
	resave: true,
	saveUninitialized: true
}));
router.use(passport.initialize());
router.use(passport.session());

sessionStore.sync().catch(err => {
	process.nextTick(() => {
		console.error('Failed to sync Session db'); // eslint-disable-line no-console
		throw err;
	});
});

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
		callbackURL: new URL('/auth/google/callback', config.serverBaseURL).href
	}, async (token, tokenSecret, profile, done) => {
		try {
			let user = await User.read(profile.id);
			if (!user) {
				user = await User.create(profile.displayName, profile.emails[0].value, '', profile.id);
				// TODO: redirect to user to profile page
			}
			done(null, user);
		} catch (err) {
			done(err);
		}
	}));
}

passport.serializeUser((user, done) => {
	done(null, user[id]);
});

passport.deserializeUser(async (userId, done) => {
	try {
		done(null, await User.getById(userId));
	} catch (err) {
		done(err);
	}
});

module.exports = router;
