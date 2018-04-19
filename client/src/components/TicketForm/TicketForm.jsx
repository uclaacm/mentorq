import React, { Component } from 'react';
import { Card, CardText, CardHeader, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class TicketForm extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit() {
		console.log('submit');
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
							fullWidth={true}
							multiline={true} />
						<TextField
							name="location"
							hintText="where are you? table number?"
							floatingLabelText="You can find me at..."
							fullWidth={true} />
						<TextField
							name="description"
							hintText="cell phone #"
							floatingLabelText="You can contact me through..."
							fullWidth={true} />
					</form>
				</CardText>
				<CardActions>
					<FlatButton label="Help me!" primary={true} fullWidth={true} />
				</CardActions>
			</Card>
		);
	}
}

export default TicketForm;