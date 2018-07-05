import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { ticketShape } from '../../shapes';

function Ticket({
	requestorName,
	mentorName,
	contactInfo,
	timeFiled,
	description,
	tableNum,
	isActive,

	claimTicket,
	unclaimTicket,
	resolveTicket
}) {
	const buttons = isActive ?
		<CardActions>
			<Button onClick={claimTicket}>
				CLAIM TICKET
			</Button>
		</CardActions> :
		<CardActions>
			<div>
				<Button onClick={unclaimTicket}>
					REOPEN TICKET
				</Button>
			</div>
			<div>
				<Button onClick={resolveTicket}>
					MARK AS COMPLETE
				</Button>
			</div>
		</CardActions>;

	return (
		<Card>
			<CardContent>
				<Typography gutterBottom variant="headline" component="h2">
					{requestorName}
				</Typography>
				<Typography gutterBottom variant="subheading">
					{new Date(timeFiled).toString()}
				</Typography>

				<p>{description} </p>
				<p>{tableNum} </p>
				<p>{contactInfo}</p>
				<p>Mentor: {mentorName}</p>
			</CardContent>
			{buttons}
		</Card>
	);
}

Ticket.propTypes = {
	...ticketShape,

	claimTicket: PropTypes.func.isRequired,
	unclaimTicket: PropTypes.func.isRequired,
	resolveTicket: PropTypes.func.isRequired
};

export default Ticket;
