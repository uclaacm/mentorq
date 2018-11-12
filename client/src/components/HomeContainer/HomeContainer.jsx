import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { ConnectedTicketForm, SplashPage } from '..';

const styles = () => ({
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
					<ConnectedTicketForm/> :
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
