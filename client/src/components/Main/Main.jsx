import React, { Component } from 'react';
import { Nav, TicketList, HomeContainer, ProfileView, ActiveMentors } from '../';
import { Route, Switch } from 'react-router-dom';

class Main extends Component {
	render() {
		return (
			<div>
				<Nav {...this.props} />

				{/*Alternate pages beneath navbar, based on current route*/}
				<Switch>
          			<Route path='/profile' render={() => <ProfileView {...this.props} />} />
					<Route path='/tickets' render={() => <TicketList {...this.props} />} />
					<Route exact path='/' render={() => <HomeContainer {...this.props} />} />
					<Route path='/mentors' render={() => <ActiveMentors {...this.props} />}/>
				</Switch>
			</div>
		);
	}
}

export default Main;
