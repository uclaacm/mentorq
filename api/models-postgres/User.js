'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('./index.js');

class User extends Sequelize.Model {
	static create(name, email, phone, googleId) {
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
	static read(googleId) {
		return this.findOne({ where: { googleId } });
	}
}
User.getById = User.findByPk;
User.getAll = User.all;

User.init({
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false
	},
	googleId: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	},
	isMentor: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	},
	isAdmin: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	}
}, {
	sequelize,
	indexes: [{ fields: ['googleId'] }]
});

User.sync().catch(err => {
	process.nextTick(() => {
		console.error('Failed to sync User db'); // eslint-disable-line no-console
		throw err;
	});
});

module.exports = User;
