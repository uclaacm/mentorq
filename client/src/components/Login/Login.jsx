import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { serverBaseURL } from '../../config';

export const authURL = String(new URL('auth/google', serverBaseURL));

class Login extends Component {
	render() {
		return (
			<a href={authURL}>
				<Button onClick={this.saveProfile} fullWidth={true}>
					LOGIN WITH GOOGLE
				</Button>
			</a>
		);
	}
}

export default Login;
