import React, { Component } from 'react';
import {Card, CardText, CardHeader } from 'material-ui/Card';

class Ticket extends Component {
	

	render()
	{

		return(
			<Card>
				<CardHeader title = "Card Header"/>

				<CardText>
					Blah blah Blah
				</CardText>

			</Card>

		);
	}
}
export default Ticket;