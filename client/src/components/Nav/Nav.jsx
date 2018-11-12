import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { authURL, logoutURL } from '../Login/Login';
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

const styles = theme => ({
	grow: {
		flexGrow: 1
	}
});

function Nav({
	isSignedIn,
	isAdmin,

	classes
}) {
	const buttons = [];
	/*
	if (isSignedIn) {
		buttons.push(
			<PrettyLink key='profile' component={IconButton} to='/profile' aria-label='Profile'>
				<AccountCircle />
			</PrettyLink>
		);
	}
	*/
	buttons.push(
		<Typography key='title' component={Link} to='/' variant='h6' color='inherit' className='toolbar-link'>
			MentorQ
		</Typography>
	);
	if (isSignedIn) {
		buttons.push(
			<PrettyLink key='tickets' to='/tickets'>Tickets</PrettyLink>,
			<PrettyLink key='mentors' to='/mentors'>Mentors</PrettyLink>
		);
		if (isAdmin) {
			buttons.push(<PrettyLink key='admin' to='/admin'>Admin Panel</PrettyLink>);
		}
		buttons.push(
			<div className={classes.grow} />,
			<Button key='logout' href={logoutURL} color='inherit'>Logout</Button>
		);
	} else {
		buttons.push(
			<div className={classes.grow} />,
			<Button key='login' href={authURL} color="inherit">Login</Button>
		);
	}

	return (
		<AppBar position='static'>
			<Toolbar>{buttons}</Toolbar>
		</AppBar>
	);
}

Nav.propTypes = {
	isSignedIn: PropTypes.bool.isRequired,
	isAdmin: PropTypes.bool.isRequired,

	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
