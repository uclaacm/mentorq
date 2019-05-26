'use strict';

module.exports = (() => {
	switch (process.env.NODE_ENV) {
	case 'production':
		return {
			// Server settings
			serverBaseURL: 'https://api.mentorq.hack.uclaacm.com/',
			serverPort: 8080,
			frontendBaseURL: 'https://mentorq.hack.uclaacm.com/'
		};
	case 'development':
	default:
		return {
			// Server settings
			serverBaseURL: 'http://localhost:8080/',
			serverPort: 8080,
			frontendBaseURL: 'http://localhost:3000/'
		};
	}
})();
