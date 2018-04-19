import React, { Component } from 'react';
import { Card, CardText, CardHeader, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class TicketForm extends Component {
	render() {
		return (
			<Card>
				<CardHeader title="How can we help you?" />
				<CardText>
					<form>
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
					<RaisedButton label="HELP ME!" />
				</CardActions>
			</Card>
		);
	}
}

export default TicketForm;