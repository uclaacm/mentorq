import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
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
			name: PropTypes.string.isRequired,
			timestamp: PropTypes.instanceOf(Date).isRequired,
			description: PropTypes.string.isRequired,
			location: PropTypes.string.isRequired,
			contact: PropTypes.string.isRequired
		};
	}

	reopenTicket() {
		this.setState({ ticketOpen: true });
	}

	claimTicket() {
		this.setState({ ticketOpen: false });
	}

	renderButtons() {
		if (this.state.ticketOpen) {
			return (
				<CardActions>
					<Button onClick={this.claimTicket}>
						CLAIM TICKET
					</Button>
				</CardActions>
			);
		}
		else {
			return (
				<CardActions>
					<div>
						<Button onClick={this.reopenTicket}>
							REOPEN TICKET
						</Button>
					</div>
					<div>
						<Button>MARK AS COMPLETE</Button>
					</div>
				</CardActions>
			);
		}
	}

	render() {
		return (
			<Card>
				<CardContent>
					<Typography gutterBottom variant="headline" component="h2">
						{this.props.name}
					</Typography>
					<Typography gutterBottom variant="subheading">
						{this.props.timestamp.toString()}
					</Typography>

					<p>{this.props.description} </p>
					<p>{this.props.location} </p>
					<p>{this.props.contact}</p>
				</CardContent>

				{this.renderButtons()}
			</Card>

		);
	}
}

export default Ticket;