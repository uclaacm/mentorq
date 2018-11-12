import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

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
	},
	fab: {
		position: 'fixed',
		bottom: theme.spacing.unit * 2,
		right: theme.spacing.unit * 2
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
		<div>
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
								userId={user._id}
							/>
						</Grid>)}
				</Grid>
			</div>
			<Tooltip title="File Ticket">
				<Button
					component={Link}
					to="/"
					variant="fab"
					color="secondary"
					aria-label="Add"
					className={classes.fab}>
					<AddIcon />
				</Button>
			</Tooltip>
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
