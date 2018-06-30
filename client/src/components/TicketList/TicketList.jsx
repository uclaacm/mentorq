import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Ticket } from '..';

class TicketList extends Component {
	render() {
		return (
			<div className="ticketList">
				{this.props.socket.tickets.map((ticket, index) => {
					return (
						<Ticket {...ticket} key={index}/>
					);
				})}
			</div>
		);
	}
}

TicketList.propTypes = {
	socket: PropTypes.object.isRequired
};

export default TicketList;
