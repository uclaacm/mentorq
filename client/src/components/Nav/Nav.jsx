import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './Nav.css';

function PrettyLink({
	component: ButtonBase,
	children,
	...rest
}) {
	return (
		<ButtonBase component={Link} color='inherit' {...rest}>
			{children}
		</ButtonBase>
	);
}

PrettyLink.propTypes = {
	component: PropTypes.func,
	children: PropTypes.node
};

PrettyLink.defaultProps = {
	component: Button
};

function Nav({
	isSignedIn,
	isAdmin
}) {
	const buttons = [];
	if (isSignedIn) {
		buttons.push(<PrettyLink component={IconButton} to='/profile' aria-label='Profile'>
			<AccountCircle />
		</PrettyLink>);
	}
	buttons.push(<Typography
		component={Link} to='/'
		variant='title' color='inherit' className='toolbar-link'>
			MentorQ
	</Typography>);
	if (isSignedIn) {
		buttons.push(
			<PrettyLink to='/tickets'>Tickets</PrettyLink>,
			<PrettyLink to='/mentors'>Mentors</PrettyLink>
		);
		if (isAdmin) {
			buttons.push(<PrettyLink to='/admin'>Admin Panel</PrettyLink>);
		}
	} else {
		buttons.push(<Button href="http://localhost:8080/auth/google" color="inherit">Login</Button>);
	}

	return (
		<AppBar position='static'>
			<Toolbar>{buttons}</Toolbar>
		</AppBar>
	);
}

Nav.propTypes = {
	isSignedIn: PropTypes.bool.isRequired,
	isAdmin: PropTypes.bool.isRequired
};

export default Nav;
