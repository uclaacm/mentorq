'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('./index.js');
const User = require('./User');

class Ticket extends Sequelize.Model {
	static create(name, email, phone, googleId) {
		return super.create({ name, email, googleId });
	}

	/**
	 * Read and Retrieve a Ticket object from the database
	 * @param {string} Ticket's googleID (as hash)
	 * @returns {Ticket} one Ticket object with matching ID
	 * @example
	 * const ticket = await Ticket.read('someGoogleIdHash');
	 * console.log(Ticket);
	 */
	static read(googleId) {
		return this.findOne({ where: { googleId } });
	}
}
Ticket.getById = Ticket.findByPk;
Ticket.getAll = Ticket.all;

Ticket.init({
	contactInfo: {
		type: Sequelize.STRING,
		allowNull: false
	},
	description: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	tableNum: {
		type: Sequelize.STRING,
		allowNull: false
	},
	timeFiled: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW,
		allowNull: false
	},
	isActive: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: true
	},
	isResolved: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	}
}, { sequelize });

Ticket.belongsTo(User, {
	foreignKey: {
		name: 'requestorId',
		allowNull: false
	}
});
Ticket.belongsTo(User, { foreignKey: 'mentorId' });

Ticket.sync({ force: true }).catch(err => {
	process.nextTick(() => {
		console.error('Failed to sync Ticket db'); // eslint-disable-line no-console
		throw err;
	});
});

module.exports = Ticket;
