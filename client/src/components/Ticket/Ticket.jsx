import React, { Component } from 'react';
import { Card, CardText, CardHeader, CardActions } from 'material-ui/Card';
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

	static get propTypes() {
		return {
			username: PropTypes.string.isRequired,
			timeSubmitted: PropTypes.string.isRequired,
			issue: PropTypes.string.isRequired,
			location: PropTypes.string.isRequired,
			contactInfo: PropTypes.string.isRequired
		};
	}

	reopenTicket() {
		this.setState({ ticketOpen: true });
	}

	claimTicket() {
		this.setState({ ticketOpen: false });
	}

	ticketButtons() {
		if (this.state.ticketOpen) {
			return (
				<CardActions>
					<RaisedButton label="CLAIM TICKET"
						backgroundColor="#FF8A65"
						onClick={this.claimTicket} />
				</CardActions>
			);
		}
		else {
			return (
				<CardActions>
					<div>
						<RaisedButton label="REOPEN TICKET"
							backgroundColor="#FF8A65"
							onClick={this.reopenTicket} />
					</div>
					<div>
						<RaisedButton label="MARK AS COMPLETE"
							backgroundColor="#4DD0E1" />
					</div>
				</CardActions>
			);
		}
	}

	render() {
		return (
			<Card>
				<CardHeader title={this.props.username}
					subtitle={this.props.timeSubmitted} />
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

export default Ticket;