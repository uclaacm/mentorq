import React, { Component } from 'react';
import { Nav, TicketList, ActiveMentors } from '../';
import { Route, Switch } from 'react-router-dom';

class Main extends Component {
	render() {
		return (
			<div>
				<Nav {...this.props} />

				{/*Alternate pages beneath navbar, based on current route*/}
				<Switch>
					<Route path='/ticket' render={() => <TicketList {...this.props} />} />
					<Route path='/activeMentors' render={() => <ActiveMentors />}/>
				</Switch>
			</div>
		);
	}
}

export default Main;
