import React, { Component } from 'react';
import { Nav } from '../';
import { Route, Switch } from 'react-router-dom';

class Main extends Component {
	render() {
		return (
			<div>
				<Nav {...this.props} />

				{/*Alternate pages beneath navbar, based on current route*/}
				<Switch>
					<Route exact path='/' render={() => <div {...this.props}></div>} />
				</Switch>
			</div>
		);
	}
}

export default Main;
