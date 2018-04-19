import React, { Component } from 'react';
import {Card, CardText, CardHeader, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Ticket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'Username',
			timeSubmitted: 'When request was submitted',
			issue: 'Issue',
			location: 'Location',
			contactInfo: 'Contact Number',
			ticketOpen: false
		};
		this.reopenTicket = this.reopenTicket.bind(this);
		this.claimTicket = this.claimTicket.bind(this);
	}

	reopenTicket() {
		this.setState(() => {
			return {ticketOpen: true};
		});
	}

	claimTicket() {
		this.setState(() => {
			return {ticketOpen: false};
		});
	}

	ticketButtons() {
		if(this.state.ticketOpen){
			return (
				<CardActions>
					<p>
						<RaisedButton label="CLAIM TICKET"
							backgroundColor="#FF8A65" 
							onClick = {this.claimTicket}/>
					</p>
				</CardActions>
			);
		}
		else{
			return (
				<CardActions>
					<p>
						<RaisedButton label="REOPEN TICKET"
							backgroundColor="#FF8A65" 
							onClick = {this.reopenTicket}/>
					</p>
					
					<p>
						<RaisedButton label="MARK AS COMPLETE"
							backgroundColor="#4DD0E1"/>
					</p>
				</CardActions>
			);
		}
	}

	render()
	{
		return(
			<Card>
				<CardHeader title = {this.state.username}
					subtitle={this.state.timeSubmitted}/>
				<CardText>
					<p>{this.state.issue} </p>
					<p>{this.state.location} </p>
					<p>{this.state.contactInfo}</p>
				</CardText>
				{this.ticketButtons()}
			</Card>

		);
	}
}
export default Ticket;