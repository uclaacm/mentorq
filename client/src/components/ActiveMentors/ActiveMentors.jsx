import React, { Component } from 'react';
import {Card, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import axios from 'axios';

const iconStyles = {
	fontSize: 16,
	color:'#4CAF50',
	display: `inline-flex`,
	verticalAlign: `top`,
}

class ActiveMentors extends Component {
	constructor(props){
		super(props);
		this.state = {
			numActive: 0,
			waitMinute: 100,
		};
		console.log('in ActiveMentors, props:', this.props);
	}

	render() {
		return(
			<Card>
				<CardText>
					<p>
						<FontIcon className='material-icons' style={iconStyles}>lens</FontIcon>
						<strong>{` `}{this.state.numActive}</strong>
						{`${this.state.numActive > 1 ?' mentors':' mentor'}
						online. Estimated wait: `} <strong>{this.state.waitMinute} minutes</strong>
					</p>
				</CardText>
			</Card>
		);
	}
}

export default ActiveMentors;