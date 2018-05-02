import React, { Component } from 'react';
import { Ticket } from '..';

class TicketList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tickets: [],
		};

		for(var i = 0; i < 4; i++){	// TODO: replace hardcode
			const ticket = {		//		 initialization 
				username: 'Username',
				timeSubmitted: 'When request was submitted',
				issue: 'Issue',
				location: 'Location',
				contactInfo: 'Contact Number',
			};
			this.state.tickets.push(ticket);
		}
	}

	render() {
		return (
			<div className="ticketList">
				{this.state.tickets.map((ticket, index) => {
					return (
						<Ticket {...ticket} key={index}/>
					);
				})}
			</div>
		);
	}
}

export default TicketList;