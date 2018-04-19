import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Container from './components/Container';
import TicketList from './components/TicketList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className='App'>
				<Switch>
					<Route path='/ticket' component={TicketList} />
					<Route path='/' component={Container} />
					<Redirect to='/' />
				</Switch>
			</div>
		);
	}
}

export default App;