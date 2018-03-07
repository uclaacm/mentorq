import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Container from './components/Container';
import Login from './components/Login';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='App'>
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/' component={Container} />
					<Redirect to='/' />
				</Switch>
			</div>
		);
	}
}

export default App;