import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.styles = {
			title: {
				cursor: 'pointer',
			}
		};
	}

	render() {
		return (
			<AppBar
				className="Nav"
				title={<span style={this.styles.title}>MentorQ</span>}
				iconElementRight={<FlatButton label="Login" href="http://localhost:8080/auth/google" />}
			/>
		);
	}

}

export default Nav;