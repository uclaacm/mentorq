import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TicketForm, SplashPage } from '..';

class HomeContainer extends Component {
	render() {
		return (
			this.props.user.current ? <TicketForm {...this.props} /> : <SplashPage />
		);
	}
}

HomeContainer.propTypes = {
	user: PropTypes.object.isRequired
};

export default HomeContainer;
