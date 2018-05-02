import React, { Component } from 'react';
import {Card, CardText} from 'material-ui/Card';

const iconStyles = {
	fontSize: 14,
	color:'#4CAF50',

};

class ActiveMentors extends Component {
	constructor(props){
		super(props);
		this.state = {
			numActive: 0,
			waitMinute: 100,
		};
	}

	render() {
		return(
			<Card>
				<CardText>
					<p>
						<span style={iconStyles}>⬤ </span>
						<strong> {this.state.numActive}</strong>
						{`${this.state.numActive > 1 ?' mentors':' mentor'}
						online. Estimated wait: `} <strong>{this.state.waitMinute} minutes</strong>
					</p>
				</CardText>
			</Card>
		);
	}
}

export default ActiveMentors;