'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('./index.js');

class User extends Sequelize.Model {
	async create(name, email, phone, googleId) {
		return super.create({ name, email, googleId });
	}

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
	}
}
User.getById = User.findById;
User.getAll = User.all;

User.init({
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
	isMentor: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false,
	},
	isAdmin: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false,
	},
}, { sequelize });

module.exports = User;
