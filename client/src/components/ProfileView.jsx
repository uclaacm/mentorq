import React, { Component } from 'react';
import {Card, CardTitle, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';

class ProfileView extends Component {
	constructor(props){
		super(props);
		this.state = {name: '', phone: '', email: '', skillsInput: '',
			skills: [{label: 'Java'}, 
				{label: 'Unity 3D'}, 
				{label: 'React'}]};
		this.styles = {
			chip: {
				margin: 4,
			},
			wrapper: {
				display: 'flex',
				flexWrap: 'wrap',
			},
			inputSkills: {
				position: 'relative',
				display: 'flex',
			},
			submitSkills: {
				position: 'absolute',
				right: 10,
				top: 0, 
				width: 120, 
				height: 39,
			},
			//TODO: Style title
		};
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleRequestDelete = this.handleRequestDelete.bind(this);
		this.handleAddSkillClick = this.handleAddSkillClick.bind(this);
	}

	handleTextChange(event, newValue) {
		switch(event.target.id){
		case 'name':
			this.setState({name: newValue});
			break;
		case 'email':
			this.setState({email: newValue});
			break;
		case 'phone':
			this.setState({phone: newValue});
			break;
		case 'newSkill':
			this.setState({skillsInput: newValue});
		}
	}
	
	handleClick() {
		event.preventDefault();			
		alert('Info was submitted: name: '+this.state.name+' phone: '+this.state.phone+' email: '+this.state.email);
		//TODO: Send info to server
	}

	handleAddSkillClick() {
		event.preventDefault();
		let list = this.state.skills;
		list.push({label: this.state.skillsInput});
		this.setState({skills: list});
		alert('Added new skill: '+this.state.skillsInput);
	}

	handleRequestDelete(key) {
		let updatedSkills = this.state.skills;
		const chipToDelete = updatedSkills.map((chip) => chip.key).indexOf(key);
		updatedSkills.splice(chipToDelete, 1);
		this.setState({skills: updatedSkills});
	}

	renderChip(data) {
		return (
			<Chip
				key={data.key}
				onRequestDelete={() => this.handleRequestDelete(data.key)}
				style={this.styles.chip}>
				{data.label}
			</Chip>
		);
	}
	render() {
		return (
			<div>
				<h1 style={this.styles.title}>Your Account</h1>
				<Card class="card small">
					<CardTitle>Name</CardTitle>
					<TextField hintText="Name" 
						fullWidth={true}
						onChange={this.handleTextChange}
						id="name"/>
					<CardTitle>Email</CardTitle>
					<TextField hintText="Email"
						onChange={this.handleTextChange}
						fullWidth={true}
						id="email"/>
					<CardTitle>Phone</CardTitle>
					<TextField hintText="Phone"
						fullWidth={true} 
						onChange={this.handleTextChange}
						id="phone"/>
					<CardTitle>Skills</CardTitle>
					<div style={this.styles.inputSkills}>
						<TextField id="newSkill" 
							hintText="node.js, ruby, python, machine learning, etc."
							fullWidth={true}
							onChange={this.handleTextChange}/>
						<RaisedButton label="Add Skill"
							style={this.styles.submitSkills}
							onClick={this.handleAddSkillClick}/>
					</div>
					<div style={this.styles.wrapper}
						onRequestDelete={this.handleRequestDelete}>
						{this.state.skills.map(this.renderChip, this)}
					</div>
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
export default ProfileView;