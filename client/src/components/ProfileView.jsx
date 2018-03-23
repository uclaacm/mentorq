import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class ProfileView extends Component {
	render() {
		return (
			<div>
				<h1>Your Account</h1>
				<Card>
					<CardTitle title="Name"/>
					<CardTitle title="Email"/>
					<CardTitle title="Phone"/>
					<CardTitle title="Skills"/>
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