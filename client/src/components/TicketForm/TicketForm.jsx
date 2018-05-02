import React, { Component } from 'react';
import { Card, CardText, CardHeader, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

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

	static get propTypes() {
		return {
			submitTicket: PropTypes.function.isRequired,
			socket: PropTypes.Object.isRequired
		};
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

		const description = this.state.description.value;
		const location = this.state.location.value;
		const contact = this.state.contact.value;
		
		if (!description) {
			this.setState({
				description: {
					...this.state.description,
					errorMsg: DEFAULT_ERROR_MESSAGE
				}
			});
		}

		if (!location) {
			this.setState({
				location: {
					...this.state.location,
					errorMsg: DEFAULT_ERROR_MESSAGE
				}
			});
		}

		if (!contact) {
			this.setState({
				contact: {
					...this.state.contact,
					errorMsg: DEFAULT_ERROR_MESSAGE
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