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
			serverBaseURL: 'https://api.mentorq.hack.uclaacm.com/',
			serverPort: 8080,
			frontendBaseURL: 'https://mentorq.hack.uclaacm.com/',

			enablePostgres: false,
		};
	case 'development':
	default:
		return {
			// MongoDB connection settings
			database: {
				uri: 'mongodb://db_mongo'
			},

			// Server settings
			serverBaseURL: 'http://localhost:8080/',
			serverPort: 8080,
			frontendBaseURL: 'http://localhost:3000/',

			enablePostgres: true,
		};
	}
})();
