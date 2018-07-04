import React from 'react';
import PropTypes from 'prop-types';

import { ConnectedTicketForm, SplashPage } from '..';

function HomeContainer({ isSignedIn }) {
	if (!isSignedIn) {
		return <SplashPage />;
	}
	return <ConnectedTicketForm />;
}

HomeContainer.propTypes = {
	isSignedIn: PropTypes.bool.isRequired
};

export default HomeContainer;
