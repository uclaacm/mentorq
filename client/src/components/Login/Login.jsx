import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Login extends Component {
	render() {
		return (
			<a href="http://localhost:8080/auth/google">
				<Button onClick={this.saveProfile} fullWidth={true}>
					LOGIN WITH GOOGLE
				</Button>
			</a>
		);
	}
}

export default Login;
