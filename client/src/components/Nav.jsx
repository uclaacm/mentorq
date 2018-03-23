import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

// TODO: Replace placeholder nav bar with real thing.
class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.styles = {
			title: {
				cursor: 'pointer',
			}
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		console.log('Clicked');
	}

	render() {
		return (
			<AppBar
				className="Nav"
				title={<span style={this.styles.title}>MentorQ</span>}
				onTitleClick={this.handleClick}
				iconClassNameRight="muidocs-icon-navigation-expand-more"
				iconElementRight={<FlatButton label="Login" />}
			/>
		);
	}

}

export default Nav;