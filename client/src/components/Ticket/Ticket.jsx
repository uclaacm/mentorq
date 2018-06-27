import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

class Ticket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ticketOpen: true
		};
		this.reopenTicket = this.reopenTicket.bind(this);
		this.claimTicket = this.claimTicket.bind(this);
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

	render() {
		return (
			<Card>
				<CardContent>
					<Typography gutterBottom variant="headline" component="h2">
						{this.props.requestorId}
					</Typography>
					<Typography gutterBottom variant="subheading">
						{this.props.timestamp.toString()}
					</Typography>

					<p>{this.props.description} </p>
					<p>{this.props.tableNum} </p>
					<p>{this.props.contactInfo}</p>
				</CardContent>
				{this.renderButtons()}
			</Card>

		);
	}
}

Ticket.propTypes = {
	requestorId: PropTypes.string.isRequired,
	timestamp: PropTypes.instanceOf(Date).isRequired,
	description: PropTypes.string.isRequired,
	tableNum: PropTypes.string.isRequired,
	contactInfo: PropTypes.string.isRequired
};

export default Ticket;
