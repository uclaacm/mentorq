import React, { Component } from 'react';
import {Card, CardTitle, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class ProfileView extends Component {
	constructor(props){
		super(props);
		this.state={name: '', phone: '', email: ''};
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleTextChange(event, newValue) {
		if(event.target.id == 'name')
			this.setState({name: newValue});
		else if(event.target.id == 'email')
			this.setState({email: newValue});
		else if(event.target.id == 'phone')
			this.setState({phone: newValue});
	}
	
	handleClick() {
		alert('Info was submitted: name: '+this.state.name+' phone: '+this.state.phone+' email: '+this.state.email);
		event.preventDefault();
		//TODO: Send info to server
	}
	render() {
		return (
			<div>
				<h1 float="center">Your Account</h1>
				<Card class="card small">
					<CardTitle>Name</CardTitle>
					<TextField hintText="Name" 
						fullWidth={true}
						onChange={this.handleTextChange}
						id="name"/><br />
					<CardTitle>Email</CardTitle>
					<TextField hintText="Email"
						onChange={this.handleTextChange}
						fullWidth={true}
						id="email"/><br />
					<CardTitle>Phone</CardTitle>
					<TextField hintText="Phone"
						fullWidth={true} 
						onChange={this.handleTextChange}
						id="phone"/><br />
					<CardTitle>Skills</CardTitle>
					<CardActions>
						<RaisedButton label="Save Profile"
							backgroundColor="#32cd32"
							labelColor="#ffffff"
							onClick={this.handleClick}/>
					</CardActions>
				</Card>
			</div> 
		);
	}
}
//Use chips for skills

export default ProfileView;