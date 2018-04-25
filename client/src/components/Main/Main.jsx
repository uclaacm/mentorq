import React, { Component } from 'react';
import { Nav, ProfileView } from '..';
import { Route, Switch } from 'react-router-dom';

class Main extends Component {
	render() {
		return (
			<div>
				<Nav {...this.props} />

				{/*Alternate pages beneath navbar, based on current route*/}
				<Switch>
					<Route path='/profile' render={() => <ProfileView {...this.props} />} />
				</Switch>
			</div>
		);
	}
}

export default Main;
