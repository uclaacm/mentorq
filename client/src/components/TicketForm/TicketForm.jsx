import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { Code, LocationOn, Phone } from '@material-ui/icons';
import { InputAdornment } from 'material-ui/Input';

import './TicketForm.css';

class TicketForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: {
				value: '',
				error: false
			},
			location: {
				value: '',
				error: false
			},
			contact: {
				value: '',
				error: false
			},
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	static get propTypes() {
		return {
			submitTicket: PropTypes.func.isRequired,
			socket: PropTypes.object.isRequired
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.id]: {
				value: e.target.value,
				error: !e.target.value
			}
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const description = this.state.description.value;
		const location = this.state.location.value;
		const contact = this.state.contact.value;
		
		if (!description) {
			this.setState({
				description: {
					...this.state.description,
					error: true
				}
			});
		}

		if (!location) {
			this.setState({
				location: {
					...this.state.location,
					error: true
				}
			});
		}

		if (!contact) {
			this.setState({
				contact: {
					...this.state.contact,
					error: true
				}
			});
		}

		if (this.state.description.value && this.state.location.value && this.state.contact.value) {
			// TODO: Fetch for current user's name
			this.props.submitTicket({
				name: '',
				timestamp: new Date(),
				description: this.state.description.value,
				location: this.state.location.value,
				contact: this.state.contact.value
			});
		}
	}

	render() {
		return (
			<Card>
				<CardContent>
					<Typography gutterBottom variant="headline" component="h2">
						How can we help you?
					</Typography>
					<form onSubmit={this.onSubmit}>
						<div className="field">
							<TextField
								required
								id="description"
								label="I need help with..."
								placeholder="Describe your problem"
								value={this.state.description.value}
								error={this.state.description.error}
								onChange={this.handleChange}
								fullWidth={true}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<Code />
										</InputAdornment>
									),
								}}
							/>
						</div>
						<div className="field">
							<TextField
								required
								id="location"
								label="You can find me at..."
								placeholder="where are you? table number?"
								value={this.state.location.value}
								error={this.state.location.error}
								onChange={this.handleChange}
								fullWidth={true}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<LocationOn />
										</InputAdornment>
									),
								}}
							/>
						</div>
						<div className="field">
							<TextField
								required
								id="contact"
								label="You can contact me through..."
								placeholder="cell phone #"
								value={this.state.contact.value}
								error={this.state.contact.error}
								onChange={this.handleChange}
								fullWidth={true}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<Phone />
										</InputAdornment>
									),
								}}
							/>
						</div>
						<Button onClick={this.onSubmit} fullWidth={true} style={{ display: 'none' }}>x</Button>
					</form>
				</CardContent>
				<CardActions>
					<Button onClick={this.onSubmit} fullWidth={true}>Help me!</Button>
				</CardActions>
			</Card>
		);
	}
}

export default TicketForm;
