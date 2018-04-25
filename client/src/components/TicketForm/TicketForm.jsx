import React, { Component } from 'react';
import { Card, CardText, CardHeader, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const DEFAULT_ERROR_MESSAGE = 'This field is required';

class TicketForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: {
				value: '',
				errorMsg: ''
			},
			location: {
				value: '',
				errorMsg: ''
			},
			contact: {
				value: '',
				errorMsg: ''
			},
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: {
				value: e.target.value,
				errorMsg: e.target.value.length > 0 ? '' : DEFAULT_ERROR_MESSAGE
			}
		});
	}

	onSubmit(e) {
		e.preventDefault();
		
		if (!this.state.description.value) {
			this.setState({
				description: {
					...this.state.description,
					errorMsg: DEFAULT_ERROR_MESSAGE
				}
			});
		}

		if (!this.state.location.value) {
			this.setState({
				location: {
					...this.state.location,
					errorMsg: DEFAULT_ERROR_MESSAGE
				}
			});
		}

		if (!this.state.contact.value) {
			this.setState({
				contact: {
					...this.state.contact,
					errorMsg: DEFAULT_ERROR_MESSAGE
				}
			});
		}

		if (this.state.description.value && this.state.location.value && this.state.contact.value) {
			// TODO: Submit ticket to backend
		}
	}

	render() {
		return (
			<Card>
				<CardHeader title="How can we help you?" />
				<CardText>
					<form onSubmit={this.onSubmit}>
						<TextField
							name="description"
							hintText="Describe your problem"
							floatingLabelText="I need help with..."
							errorText={this.state.description.errorMsg}
							fullWidth={true}
							onChange={this.handleChange} />
						<TextField
							name="location"
							hintText="where are you? table number?"
							floatingLabelText="You can find me at..."
							errorText={this.state.location.errorMsg}
							fullWidth={true} 
							onChange={this.handleChange} />
						<TextField
							name="contact"
							hintText="cell phone #"
							floatingLabelText="You can contact me through..."
							errorText={this.state.contact.errorMsg}
							fullWidth={true} 
							onChange={this.handleChange} />
						<button type="submit" style={{ display: 'none' }}></button>
					</form>
				</CardText>
				<CardActions>
					<FlatButton 
						label="Help me!" 
						onClick={this.onSubmit}
						primary={true} 
						fullWidth={true} />
				</CardActions>
			</Card>
		);
	}
}

export default TicketForm;