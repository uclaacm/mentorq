import React, { Component } from 'react';
import {Card, CardText, CardHeader, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';

class Ticket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ticketOpen: true,
		};
		this.reopenTicket = this.reopenTicket.bind(this);
		this.claimTicket = this.claimTicket.bind(this);
	}

	reopenTicket() {
		this.setState({ticketOpen: true});
	}

	claimTicket() {
		this.setState({ticketOpen: false});
	}

	ticketButtons() {
		if(this.state.ticketOpen){
			return (
				<CardActions>
					<p>
						<RaisedButton label="CLAIM TICKET"
							backgroundColor="#FF8A65" 
							onClick={this.claimTicket}/>
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
							onClick={this.reopenTicket}/>
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
				<CardHeader title={this.props.username}
					subtitle={this.props.timeSubmitted}/>
				<CardText>
					<p>{this.props.issue} </p>
					<p>{this.props.location} </p>
					<p>{this.props.contactInfo}</p>
				</CardText>
				{this.ticketButtons()}
			</Card>

		);
	}
}

Ticket.propTypes = {
	username: PropTypes.string.isRequired,
	timeSubmitted: PropTypes.string.isRequired,
	issue: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	contactInfo: PropTypes.string.isRequired,
	key:PropTypes.number.isRequired
};

export default Ticket;