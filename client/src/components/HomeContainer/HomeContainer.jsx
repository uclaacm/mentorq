import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { ConnectedActiveMentors, ConnectedTicketForm, SplashPage } from '..';

const styles = theme => ({
	banner: {
		position: 'absolute',
		top: 0,
		width: '100vw',
		height: '100vh',
		zIndex: -1,
		background: 'url("/banner-hoth.png"), #37293b',
		backgroundPosition: 'center bottom',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat'
	},
	container: {
		padding: `${theme.spacing.unit * 2}px 0`,
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
			width: 800,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	}
});

function HomeContainer({
	isSignedIn,
	classes
}) {
	return (
		<div>
			<div className={classes.banner} />
			<div>
				{isSignedIn ?
					<div className={classes.container}>
						<ConnectedTicketForm/>
						<ConnectedActiveMentors/>
					</div> :
					<SplashPage />}
			</div>
		</div>
	);
}

HomeContainer.propTypes = {
	isSignedIn: PropTypes.bool.isRequired,
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeContainer);
