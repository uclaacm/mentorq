import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { Login } from '..';
import { eventName } from '../../config/';

const styles = theme => ({
	container: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	grid: {
		marginTop: theme.spacing.unit * 4,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
	},
	greet: {
		marginBottom: theme.spacing.unit * 3
	},
	welcome: {
		marginBottom: theme.spacing.unit * 3
	},
	eventName: {
		color: theme.palette.primary.main
	}
});

function SplashPage({
	classes
}) {
	return (
		<div className={classes.container}>
			<Paper>
				<div className={classes.grid}>
					<div className={classes.greet}>
						<Typography component='h2' variant='h4' className={classes.welcome}>
							Welcome to <span className={classes.eventName}>{eventName}.</span>
						</Typography>
						<Typography component='p' variant='h6'>
							Hi! To get help from mentors, please sign in with your Google account below.
						</Typography>
					</div>
					<Login />
				</div>
			</Paper>
		</div>
	);
}

SplashPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SplashPage);
