import React, { Component } from 'react';
import Nav from './Nav';

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="container">
				<Nav />	
				<p></p>
			</div>
		);
	}
}

export default Container;