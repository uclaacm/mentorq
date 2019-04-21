'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('./index.js');
const User = require('./User');

class Ticket extends Sequelize.Model {
	static create(requestorId, description, tableNum, contactInfo) {
		return super.create({
			requestorId,
			description,
			tableNum,
			contactInfo
		});
	}

	static /* async */ getRelevantTickets(/* user */) {
		return Promise.resolve([]);
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
