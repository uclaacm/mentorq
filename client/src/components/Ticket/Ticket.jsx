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

const styles = () => ({
	ticket: {
		display: 'flex',
		flexDirection: 'column'
	},
	header: {
		fontWeight: 'bold'
	},
	buttons: {
		justifyContent: 'center'
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
	// mentorName,
	contactInfo,
	timeFiled,
	description,
	tableNum,
	isActive,

	claimTicket,
	unclaimTicket,
	resolveTicket,

	classes
}) {
	const buttons = isActive ?
		<CardActions className={classes.buttons}>
			<Button color='secondary' variant='contained' onClick={claimTicket}>CLAIM</Button>
		</CardActions> :
		<CardActions className={classes.buttons}>
			<div>
				<Button onClick={unclaimTicket}>REOPEN TICKET</Button>
			</div>
			<div>
				<Button onClick={resolveTicket}>MARK AS COMPLETE</Button>
			</div>
		</CardActions>;
	return (
		<Card className={classes.ticket}>
			<div style={{ backgroundColor: '#3F51B5', height: '10px' }} />
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
			{/* <CardContent>
				{mentorName}
			</CardContent> */}
			{buttons}
		</Card>
	);
}

Ticket.propTypes = {
	...ticketShape,

	claimTicket: PropTypes.func.isRequired,
	unclaimTicket: PropTypes.func.isRequired,
	resolveTicket: PropTypes.func.isRequired,

	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Ticket);
