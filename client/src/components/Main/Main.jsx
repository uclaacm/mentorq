import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Nav, TicketList, HomeContainer, ProfileView, ActiveMentors, AdminPanel } from '../';

class Main extends Component {
	isSignedIn() {
		return this.props.user.current;
	}

	render() {
		return (
			<div>
				<Nav {...this.props} />

				{/* Alternate pages beneath navbar, based on current route*/}
				<Switch>
					<Route exact path='/' render={() => <HomeContainer {...this.props} />} />

					<Route path='/profile' render={() =>
						this.isSignedIn() ? <ProfileView {...this.props} /> : <Redirect to='/' />
					} />
					<Route path='/tickets' render={() =>
						this.isSignedIn() ? <TicketList {...this.props} /> : <Redirect to='/' />
					} />
					<Route path='/mentors' render={() =>
						this.isSignedIn() ? <ActiveMentors {...this.props} /> : <Redirect to='/' />
					} />
					<Route path='/admin' render={() =>
						this.isSignedIn() ? <AdminPanel {... this.props} /> : <Redirect to='/' />
					} />
				</Switch>
			</div>
		);
	}
}

Main.propTypes = {
	user: PropTypes.object.isRequired
};

export default Main;
