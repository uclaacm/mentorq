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

		// For "include", we have to use the Sequelize identifiers, so "…As"
		// versions are used.
		const options = {
			order: ['timeFiled'],
			where,
			include: [
				{ model: User, as: 'requestorIdAs', attributes: ['name', 'id'] },
				{ model: User, as: 'mentorIdAs', attributes: ['name', 'id'] }
			]
		};
		const res = await this.findAll(options);
		const objs = [];
		for (const ticketRes of res) {
			const ticket = { ...ticketRes.toJSON() };
			const requestorId = ticket.requestorIdAs.id;
			const requestorName = ticket.requestorIdAs.name;
			ticket.requestorId = String(requestorId);
			ticket.requestorName = requestorName;
			delete ticket.requestorIdAs;

			if (ticket.mentorIdAs) {
				const mentorId = ticket.mentorIdAs.id;
				const mentorName = ticket.mentorIdAs.name;
				ticket.mentorId = String(mentorId);
				ticket.mentorName = mentorName;
			}
			delete ticket.mentorIdAs;

			ticket.timeFiled = ticket.timeFiled.valueOf();
			ticket.createdAt = ticket.createdAt.valueOf();
			ticket.updatedAt = ticket.updatedAt.valueOf();
			ticket._id = String(ticket.id);

			objs.push(ticket);
		}
		return objs;
	}

	get _id() {
		return String(this.id);
	}

	toJSON() {
		return {
			...super.toJSON(),
			_id: this._id
		};
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

// It appears that "as" and "foreignKey" must be different, so we affix the
// as with "As".
// - as: an identifier for Sequelize
// - foreignKey: the key actually stored in the DB
// See
// https://github.com/sequelize/sequelize/issues/3678#issuecomment-102460069
Ticket.belongsTo(User, {
	as: 'requestorIdAs',
	foreignKey: 'requestorId'
});
Ticket.belongsTo(User, {
	as: 'mentorIdAs',
	foreignKey: 'mentorId'
});

Ticket.sync().catch(err => {
	process.nextTick(() => {
		console.error('Failed to sync Ticket db'); // eslint-disable-line no-console
		throw err;
	});
});

module.exports = Ticket;
