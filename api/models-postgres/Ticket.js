'use strict';

const Sequelize = require('sequelize');
const { sequelize } = require('./index.js');
const User = require('./User');

const { or } = Sequelize.Op;

class Ticket extends Sequelize.Model {
	static create(requestorId, description, tableNum, contactInfo) {
		return super.create({
			requestorId,
			description,
			tableNum,
			contactInfo
		});
	}

	claim(mentorId) {
		this.set('mentorId', mentorId);
		this.set('isActive', false);

		return this.save();
	}

	unclaim() {
		this.set('mentorId', null);
		this.set('isActive', true);

		return this.save();
	}

	resolve() {
		this.set('mentorId', null);
		this.set('isActive', true);

		return this.save();
	}

	static async getRelevantTickets(user) {
		let where;
		if (user.isAdmin) {
			// If the user is an admin, every unresolved ticket is relevant.
			where = { isResolved: false };
		} else if (user.isMentor) {
			// If the user is a mentor, all unresolved tickets the user claimed + all
			// unclaimed tickets are relevant.
			where = {
				[or]: [
					{ isResolved: false, mentorId: user.id },
					{ isActive: true }
				]
			};
		} else {
			// If the user is neither, all unresolved tickets requested by the student
			// are relevant.
			where = { isResolved: false, requestorId: user.id };
		}

		const options = {
			order: ['timeFiled'],
			where,
			include: [
				{ as: 'requestorId', attributes: ['name', 'id'] },
				{ as: 'mentorId', attributes: ['name', 'id'] }
			]
		};
		const res = await this.findAll(options);
		console.log(res); // eslint-disable-line no-console
		for (const ticket of res) {
			const requestorId = ticket.requestorId.id;
			const requestorName = ticket.requestorId.name;
			ticket.requestorId = requestorId;
			ticket.requestorName = requestorName;

			if (ticket.mentorId) {
				const mentorId = ticket.mentorId.id;
				const mentorName = ticket.mentorId.name;
				ticket.mentorId = mentorId;
				ticket.mentorName = mentorName;
			}
		}
		return res;
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
	as: 'requestorId',
	foreignKey: 'requestorIdFk'
});
Ticket.belongsTo(User, {
	as: 'mentorId',
	foreignKey: 'mentorIdFk'
});

Ticket.sync({ force: true }).catch(err => {
	process.nextTick(() => {
		console.error('Failed to sync Ticket db'); // eslint-disable-line no-console
		throw err;
	});
});

module.exports = Ticket;
