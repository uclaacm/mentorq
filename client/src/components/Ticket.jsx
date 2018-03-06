import React, { Component } from 'react';
import {Card, CardText, CardHeader, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Ticket extends Component {
	

	render()
	{

		return(
			<Card>
				<CardHeader title = "Username"
					subtitle="When request was submitted"/>
				<CardText style = "color:red;">
					Issue <br/>
					Location <br/>
					Contact Number<br/>
				</CardText>
				<CardActions>

					<RaisedButton label="REOPEN TICKET"
						backgroundColor="#F48FB1"/>
					<br />
					<br />
					<RaisedButton label="MARK AS COMPLETE"
						backgroundColor="#7E57C2"/>

					<br />

					
				</CardActions>
			</Card>

		);
	}
}
export default Ticket;