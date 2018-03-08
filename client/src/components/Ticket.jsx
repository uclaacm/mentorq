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
				<CardText>
					<p>Issue </p>
					<p>Location </p>
					<p>Contact Number</p>
				</CardText>
				<CardActions>
					<p>
						<RaisedButton label="REOPEN TICKET"
							backgroundColor="#FF8A65"/>
					</p>
					
					<p>
						<RaisedButton label="MARK AS COMPLETE"
							backgroundColor="#4DD0E1"/>
					</p>
				

					
				</CardActions>
			</Card>

		);
	}
}
export default Ticket;