'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('mentorq', 'mentorq-api', '', {
	host: 'db_postgres',
	dialect: 'postgres'
});

exports.sequelize = sequelize;
