import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class ProfileView extends Component {	
	render() {
		return (
			<div>
				<h1>Your Account</h1>
				<Card>
					<CardTitle>Name</CardTitle>
					<TextField hintText="Name" 
						fullWidth={true}/><br />
					<CardTitle>Email</CardTitle>
					<TextField hintText="Email"
						fullWidth={true}/><br />
					<CardTitle>Phone</CardTitle>
					<TextField hintText="Phone"
						fullWidth={true}/><br />
					<CardTitle>Skills</CardTitle>
					<RaisedButton label="Save Profile"
						backgroundColor="#32cd32"
						labelColor="#ffffff"/>
				</Card>
			</div> 
		);
	}
}
//Use chips for skills

export default ProfileView;