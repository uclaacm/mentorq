import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import { PermIdentity, Phone, Email, Web } from '@material-ui/icons';
import { InputAdornment } from 'material-ui/Input';

class ProfileView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: {
				value: '',
				error: false
			},
			phone: {
				value: '',
				error: false
			},
			email: {
				value: '',
				error: false
			},
			skillsInput: {
				value: '',
				error: false
			},
			skills: [
				{ label: 'Java' },
				{ label: 'Unity 3D' },
				{ label: 'React' }
			]
		};
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
		this.saveProfile = this.saveProfile.bind(this);
		this.deleteSkill = this.deleteSkill.bind(this);
		this.addSkill = this.addSkill.bind(this);
	}

	handleTextChange(event) {
		this.setState({
			[event.target.id]: {
				value: event.target.value,
				error: !event.target.value
			}
		});
	}

	saveProfile(event) {
		event.preventDefault();

		const name = this.state.name.value;
		const email = this.state.email.value;
		const phone = this.state.phone.value;

		if (!name) {
			this.setState({
				name: {
					...this.state.name,
					error: true
				}
			});
		}

		if (!email) {
			this.setState({
				email: {
					...this.state.email,
					error: true
				}
			});
		}

		// TODO: Send info to server
		if (name && email) {
			console.log('Info was submitted: name: ' + name + ' phone: ' + phone + ' email: ' + email);
		}
	}

	deleteSkill(key) {
		const updatedSkills = this.state.skills;
		const chipToDelete = updatedSkills.map((chip) => chip.key).indexOf(key);
		updatedSkills.splice(chipToDelete, 1);
		this.setState({ skills: updatedSkills });
	}

	// TODO: Check for duplicates
	addSkill(event) {
		event.preventDefault();

		if (this.state.skillsInput.value) {
			this.setState({
				skills: [...this.state.skills, { label: this.state.skillsInput.value }]
			});
		}

		this.setState({
			skillsInput: {
				value: '',
				error: !this.state.skillsInput.value
			}
		});
	}

	render() {
		return (
			<div>
				<Card>
					<CardContent>
						<Typography gutterBottom variant="headline" component="h1">
							Your Account
						</Typography>
						<form onSubmit={this.onSubmit}>
							<TextField
								required
								id="name"
								label="Name"
								placeholder="Joe Bruin"
								value={this.state.name.value}
								error={this.state.name.error}
								onChange={this.handleTextChange}
								fullWidth={true}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<PermIdentity />
										</InputAdornment>
									),
								}}
							/>
							<TextField
								required
								id="email"
								label="Email"
								placeholder="joebruin@ucla.edu"
								value={this.state.email.value}
								error={this.state.email.error}
								onChange={this.handleTextChange}
								fullWidth={true}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<Email />
										</InputAdornment>
									),
								}}
							/>
							<TextField
								id="phone"
								label="Phone Number"
								placeholder="(xxx)xxx-xxxx"
								value={this.state.phone.value}
								onChange={this.handleTextChange}
								fullWidth={true}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<Phone />
										</InputAdornment>
									),
								}}
							/>

							<div style={this.styles.inputSkills}>
								<TextField
									id="skillsInput"
									label="Skills"
									placeholder="node.js, ruby, python, machine learning, etc."
									value={this.state.skillsInput.value}
									error={this.state.skillsInput.error}
									onChange={this.handleTextChange}
									fullWidth={true}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<Web />
											</InputAdornment>
										),
									}}
								/>
								<Button style={this.styles.submitSkills} onClick={this.addSkill}>
									Add Skill
								</Button>
							</div>

							<div style={this.styles.wrapper}>
								{this.state.skills.map((skill, i) =>
									<Chip
										key={i}
										onDelete={() => this.deleteSkill(i)}
										style={this.styles.chip}
										label={skill.label}
									/>
								)}
							</div>

							<Button onClick={this.onSubmit} fullWidth={true} style={{ display: 'none' }}>x</Button>
						</form>
					</CardContent>
					<CardActions>
						<Button
							onClick={this.saveProfile}
							fullWidth={true}>
							Save Profile
						</Button>
					</CardActions>
				</Card>
			</div>
		);
	}
}
export default ProfileView;