import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
	Nav,
	ConnectedTicketList,
	HomeContainer,
	ConnectedProfileView,
	ConnectedActiveMentors,
	AdminPanel
} from '../';

function Main({ isSignedIn, isAdmin }) {
	return (
		<div>
			<Nav isSignedIn={isSignedIn} isAdmin={isAdmin} />

			{/* Alternate pages beneath navbar, based on current route*/}
			<Switch>
				<Route exact path='/' render={() => <HomeContainer isSignedIn={isSignedIn} />} />

				<Route path='/profile' render={() =>
					isSignedIn ? <ConnectedProfileView /> : <Redirect to='/' />
				} />
				<Route path='/tickets' render={() =>
					isSignedIn ? <ConnectedTicketList /> : <Redirect to='/' />
				} />
				<Route path='/mentors' render={() =>
					isSignedIn ? <ConnectedActiveMentors /> : <Redirect to='/' />
				} />
				<Route path='/admin' render={() =>
					isAdmin ? <AdminPanel /> : <Redirect to='/' />
				} />
			</Switch>
		</div>
	);
}

Main.propTypes = {
	isSignedIn: PropTypes.bool.isRequired,
	isAdmin: PropTypes.bool.isRequired
};

export default Main;
