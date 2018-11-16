'use strict';

module.exports = (() => {
	switch (process.env.NODE_ENV) {
	case 'production':
		return {
			// MongoDB connection settings
			database: {
				uri: 'mongodb://db_mongo'
			},

			// Server settings
			serverPort: 8080,
			frontendBaseURL: 'https://mentorq.hack.uclaacm.com/'
		};
	case 'development':
	default:
		return {
			// MongoDB connection settings
			database: {
				uri: 'mongodb://db_mongo'
			},

			// Server settings
			serverPort: 8080,
			frontendBaseURL: 'http://localhost:3000/'
		};
	}
})();
