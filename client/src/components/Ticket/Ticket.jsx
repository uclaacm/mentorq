import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { ticketShape } from '../../shapes';
import TicketEntry from './TicketEntry';

const styles = theme => ({
	borderLine: {
		backgroundColor: theme.palette.primary.main,
		height: 10
	},
	header: {
		fontWeight: 'bold'
	},
	buttons: {
		justifyContent: 'center'
	// },
	// status: {
	// 	color: '#888888',
	}
});

const formatter = new Intl.DateTimeFormat('en-US', {
	month: 'short', day: 'numeric',
	hour: 'numeric', minute: 'numeric', second: 'numeric',
	timeZone: 'America/Los_Angeles'
});

function PrettyDate({ time }) {
	const date = new Date(time);
	return <time dateTime={date.toISOString()}>{formatter.format(date)}</time>;
}

PrettyDate.propTypes = {
	time: PropTypes.number.isRequired
};

function Ticket({
	requestorName,
	mentorName,
	mentorId,
	contactInfo,
	timeFiled,
	description,
	tableNum,
	isActive,

	claimTicket,
	unclaimTicket,
	resolveTicket,
	isMentor,
	userId,

	classes
}) {
	const buttons = [];
	let status = '';
	if (isMentor && isActive) {
		buttons.push(
			<Button color='secondary' variant='contained' key='claim' onClick={claimTicket}>CLAIM</Button>
		);
	} else if (isMentor && !isActive) {
		buttons.push(
			<Button key='reopen' onClick={unclaimTicket}>REOPEN TICKET</Button>
		);
		if (mentorId === userId) {
			status = 'You claimed this ticket.';
			buttons.push(
				<Button color='secondary' variant='contained' key='markascomplete' onClick={resolveTicket}>
					MARK AS COMPLETE
				</Button>
			);
		} else {
			status = `${mentorName} claimed this ticket.`;
		}
	} else if (!isMentor && isActive) {
		status = 'Mentors will be here shortly.';
	} else { // !isMentor && !isActive
		status = `${mentorName} is on their way.`;
	}
	const actions = buttons.length > 0 ? <CardActions className={classes.buttons}>{buttons}</CardActions> : null;
	return (
		<Card>
			<div className={classes.borderLine} />
			<CardContent>
				<Typography className={classes.header} variant='h4' component='h2'>
					{requestorName}
				</Typography>
				<Typography gutterBottom color='textSecondary'>
					<PrettyDate time={timeFiled} />
				</Typography>
			</CardContent>
			<TicketEntry headerText='I need help with…' bodyText={description} />
			<TicketEntry headerText='Find me at…' bodyText={tableNum} />
			<TicketEntry headerText='Reach me at…' bodyText={contactInfo} />
			{status === '' ?
				null :
				<CardContent>
					<Typography color='textSecondary' component='p' variant='h6'>
						{status}
					</Typography>
				</CardContent>}
			{actions}
		</Card>
	);
}

Ticket.propTypes = {
	...ticketShape,

	claimTicket: PropTypes.func.isRequired,
	unclaimTicket: PropTypes.func.isRequired,
	resolveTicket: PropTypes.func.isRequired,
	isMentor: PropTypes.bool.isRequired,
	userId: PropTypes.string.isRequired,

	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Ticket);
