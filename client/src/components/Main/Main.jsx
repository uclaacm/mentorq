import React, { Component } from 'react';
import { Nav, TicketList, HomeContainer } from '../';
import { Route, Switch } from 'react-router-dom';

class Main extends Component {
	render() {
		return (
			<div>
				<Nav {...this.props} />

				{/*Alternate pages beneath navbar, based on current route*/}
				<Switch>
					<Route path='/tickets' render={() => <TicketList {...this.props} />} />
					<Route exact path='/' render={() => <HomeContainer {...this.props} />} />
				</Switch>
			</div>
		);
	}
}

export default Main;
