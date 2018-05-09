import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Ticket } from '..';

class TicketList extends Component {
	static get propTypes() {
		return {
			socket: PropTypes.object.isRequired
		};
	}

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

export default TicketList;
