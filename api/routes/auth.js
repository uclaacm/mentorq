'use strict';

const express = require('express');
const passport = require('passport');

const { frontendBaseURL } = require('../config');

const router = new express.Router();

// TODO: Create controller to handle passport things
router.get('/google', passport.authenticate('google', {
	scope: ['profile', 'email'],
	successRedirect: frontendBaseURL,
	failureRedirect: frontendBaseURL,
	failureFlash: true
}));

router.get(
	'/google/callback',
	passport.authenticate('google', { failureRedirect: frontendBaseURL }),
	(req, res) => {
		res.redirect(req.session.returnTo || frontendBaseURL);
		req.session.returnTo = undefined;
	}
);

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect(frontendBaseURL);
});

module.exports = router;
