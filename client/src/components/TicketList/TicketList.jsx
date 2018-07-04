import React from 'react';
import PropTypes from 'prop-types';

import { Ticket } from '..';
import { ticketShape, userShape } from '../../shapes';

function TicketList({
	tickets,
	user,

	claimTicket,
	unclaimTicket,
	resolveTicket
}) {
	// TODO: is this enough to implement Ticket?
	const isMentor = user.isMentor || user.isAdmin;

	return (
		<div className="ticketList">
			{tickets.map(ticket => <Ticket
				{...ticket}
				key={ticket._id}
				claimTicket={() => claimTicket(ticket._id)}
				unclaimTicket={() => unclaimTicket(ticket._id)}
				resolveTicket={() => resolveTicket(ticket._id)}
				isMentor={isMentor}
			/>)}
		</div>
	);
}

TicketList.propTypes = {
	tickets: PropTypes.arrayOf(PropTypes.shape(ticketShape).isRequired).isRequired,
	user: PropTypes.shape(userShape).isRequired,

	claimTicket: PropTypes.func,
	unclaimTicket: PropTypes.func,
	resolveTicket: PropTypes.func
};

export default TicketList;
