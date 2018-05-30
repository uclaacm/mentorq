import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import './Nav.css';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.styles = {
			title: {
				cursor: 'pointer'
			}
		};
	}

	render() {
		return (
			<AppBar position="static">
				<Toolbar>
					<a href="http://localhost:8080/auth/google" className="toolbar-button">
						<IconButton color="inherit" aria-label="Login">
							<AccountCircle />
						</IconButton>
					</a>
					<Typography variant="title" color="inherit">
						MentorQ
					</Typography>

				</Toolbar>
			</AppBar>
		);
	}
}

export default Nav;
