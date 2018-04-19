import React, { Component } from 'react';
import { Ticket } from '..';

class TicketList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tickets: [],
		};
		this.state.tickets.push(<Ticket />);
		this.state.tickets.push(<Ticket />);
		this.state.tickets.push(<Ticket />);
		this.state.tickets.push(<Ticket />);
	}

	render() {
		return (
			<div className="ticketList">
				{this.state.tickets}
			</div>
		);
	}
}

export default TicketList;