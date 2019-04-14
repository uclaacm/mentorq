'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('./index.js');

const User = sequelize.define('user', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	googleId: {
		type: Sequelize.STRING,
		primaryKey: true,
		unique: true,
		allowNull: false,
	},
});

Object.assign(User, {
	/**
	 * Read and Retrieve a User object from the database
	 * @param {string} user's googleID (as hash)
	 * @returns {User} one User object with matching ID
	 * @example
	 * const user = await User.read('someGoogleIdHash');
	 * console.log(user);
	 */
	async read(googleId) {
		return this.findOne({ where: { googleId } });
	},

	getById: User.findById,

	getAll: User.all
});

module.exports = User;
