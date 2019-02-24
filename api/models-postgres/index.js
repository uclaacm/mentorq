'use strict';

const { Pool } = require('pg');
const pool = new Pool({
	user: 'mentorq-api',
	host: 'db_postgres',
	database: 'mentorq'
});

// If the connection throws an error
pool.on('error', err => {
	// eslint-disable-next-line no-console
	console.error('Postgres idle client error:', err);
});

pool.connect((err, client, done) => {
	if (err) throw err;
});
