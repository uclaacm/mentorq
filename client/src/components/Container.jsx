import React, { Component } from 'react';
import Nav from './Nav';
import AdminPanel from './AdminPanel';

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<Nav />
				<AdminPanel />
			</div>
		);
	}
}

export default Container;