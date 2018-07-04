import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Nav, ConnectedTicketList, HomeContainer, ProfileView, ActiveMentors, AdminPanel } from '../';

function Main(props) {
	const isSignedIn = Boolean(props.user.current);
	const isAdmin = isSignedIn && props.user.current.isAdmin;

	return (
		<div>
			<Nav isSignedIn={isSignedIn} isAdmin={isAdmin} />

			{/* Alternate pages beneath navbar, based on current route*/}
			<Switch>
				<Route exact path='/' render={() => <HomeContainer isSignedIn={isSignedIn} />} />

				<Route path='/profile' render={() =>
					isSignedIn ? <ProfileView {...props} /> : <Redirect to='/' />
				} />
				<Route path='/tickets' render={() =>
					isSignedIn ? <ConnectedTicketList /> : <Redirect to='/' />
				} />
				<Route path='/mentors' render={() =>
					isSignedIn ? <ActiveMentors {...props} /> : <Redirect to='/' />
				} />
				<Route path='/admin' render={() =>
					isAdmin ? <AdminPanel /> : <Redirect to='/' />
				} />
			</Switch>
		</div>
	);
}

Main.propTypes = {
	user: PropTypes.object.isRequired
};

export default Main;
