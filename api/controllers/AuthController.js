'use strict';

function isAuthenticated(req, res, next) {
	// Check the user is logged in
	// If a user isn't logged in, then redirect them somewhere
	if (req.user) {
		next();
		return;
	}

	req.session.returnTo = req.originalUrl;
	res.redirect('/auth/google');
}

module.exports = {
	isAuthenticated
};
