import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const googleIcon = (
	<svg height="17px" width="17px" viewBox="0 0 24 24">
    	<path fill="#000000" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
	</svg>
);

const googleLoginButtonStyle = {
	verticalAlign: `middle`,
}

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password:'',
		};
	}

	render(){
		return(
			<div>
				<TextField 	
				floatingLabelText='Username'
				onChange={(event, newValue)=>this.setState({username:newValue})}
				hintText='Username'
				fullWidth={true}/>
				<br/>
				<TextField 	
				floatingLabelText='Password'
				onChange={(event, newValue)=>this.setState({password:newValue})}
				hintText='Password'	
				type='password'
				fullWidth={true}/>
				<br/>
				<RaisedButton label='LOGIN' fullWidth={true}/>
				<RaisedButton label='LOGIN WITH GOOGLE' fullWidth={true} icon={googleIcon} labelStyle={googleLoginButtonStyle}/>
			</div>
		);
	}
}

export default Login;