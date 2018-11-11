import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CardContent } from '@material-ui/core';

const styles = theme => ({
	headerContainer: {
		backgroundColor: theme.palette.primary.main
	},
	headerText: {
		color: theme.palette.common.white,
		fontWeight: '200',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3
	},
	body: {
		fontSize: '1rem'
	}
});

function TicketEntry({
	headerText,
	bodyText,
	classes
}) {
	return (
		<div>
			<div className={classes.headerContainer}>
				<Typography className={classes.headerText} component='h3' variant='h6'>{headerText}</Typography>
			</div>
			<CardContent>
				<Typography className={classes.body} component='p'>{bodyText}</Typography>
			</CardContent>
		</div>
	);
}

TicketEntry.propTypes = {
	headerText: PropTypes.string.isRequired,
	bodyText: PropTypes.string.isRequired,
	classes: PropTypes.object
};

export default withStyles(styles)(TicketEntry);
