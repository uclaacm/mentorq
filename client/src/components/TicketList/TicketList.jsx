import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { Ticket } from '..';
import { ticketShape, userShape } from '../../shapes';

const styles = theme => ({
	layout: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		padding: `${theme.spacing.unit * 2}px 0`
	},
	item: {
		width: 'inherit'
	}
});

function TicketList({
	tickets,
	user,

	claimTicket,
	unclaimTicket,
	resolveTicket,

	classes
}) {
	// TODO: is this enough to implement Ticket?
	const isMentor = user.isMentor || user.isAdmin;

	return (
		<div className={classes.layout}>
			<Grid container spacing={16}>
				{tickets.map(ticket =>
					<Grid className={classes.item} item key={ticket._id} sm={6} md={4} lg={3}>
						<Ticket
							{...ticket}
							claimTicket={() => claimTicket(ticket._id)}
							unclaimTicket={() => unclaimTicket(ticket._id)}
							resolveTicket={() => resolveTicket(ticket._id)}
							isMentor={isMentor}
						/>
					</Grid>)}
			</Grid>
		</div>
	);
}

TicketList.propTypes = {
	tickets: PropTypes.arrayOf(PropTypes.shape(ticketShape).isRequired).isRequired,
	user: PropTypes.shape(userShape).isRequired,

	claimTicket: PropTypes.func,
	unclaimTicket: PropTypes.func,
	resolveTicket: PropTypes.func,

	classes: PropTypes.object
};

export default withStyles(styles)(TicketList);
