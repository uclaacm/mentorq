import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Nav, ConnectedTicketList, HomeContainer, ProfileView, ActiveMentors, AdminPanel } from '../';

class Main extends Component {
	render() {
		const isSignedIn = Boolean(this.props.user.current);
		const isAdmin = isSignedIn && this.props.user.current.isAdmin;

		return (
			<div>
				<Nav isSignedIn={isSignedIn} isAdmin={isAdmin} />

				{/* Alternate pages beneath navbar, based on current route*/}
				<Switch>
					<Route exact path='/' render={() => <HomeContainer {...this.props} />} />

					<Route path='/profile' render={() =>
						isSignedIn ? <ProfileView {...this.props} /> : <Redirect to='/' />
					} />
					<Route path='/tickets' render={() =>
						isSignedIn ? <ConnectedTicketList /> : <Redirect to='/' />
					} />
					<Route path='/mentors' render={() =>
						isSignedIn ? <ActiveMentors {...this.props} /> : <Redirect to='/' />
					} />
					<Route path='/admin' render={() =>
						isAdmin ? <AdminPanel {... this.props} /> : <Redirect to='/' />
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
