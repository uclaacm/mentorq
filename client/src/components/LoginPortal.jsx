import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class LoginPortal extends Component {
	render() {
		return (
			<div>
                <body>
				<RaisedButton 
					backgroundColor="#C960FF"
					label="Login"> 
				</RaisedButton>
                <RaisedButton 
					backgroundColor="#C960FF"
					label="Sign Up"> 
				</RaisedButton>
                </body>
			</div>
		);
	}   
}
export default LoginPortal;


