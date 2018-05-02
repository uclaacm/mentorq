import React, { Component } from 'react';
import { TicketForm } from '..';

class HomeContainer extends Component {
	render() {
		return(
			<TicketForm {...this.props} />
		);
	}
}
export default HomeContainer;