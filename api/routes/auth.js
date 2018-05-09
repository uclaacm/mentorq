'use strict';

const express = require('express');
const passport = require('passport');

const router = new express.Router();

// TODO: Create controller to handle passport things
router.get('/google', passport.authenticate('google', {
	scope: ['https://www.googleapis.com/auth/plus.login'],
	successRedirect: 'http://localhost:3000/',
	failureRedirect: '/auth/google',
	failureFlash: true
}));

router.get(
	'/google/callback',
	passport.authenticate('google', { failureRedirect: '/auth/google' }),
	(req, res) => {
		res.redirect(req.session.returnTo || 'http://localhost:3000');
		delete req.session.returnTo;
	}
);

module.exports = router;
