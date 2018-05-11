import React, { Component } from 'react';
import {Card, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';

const iconStyles = {
	fontSize: 16,
	color:'#4CAF50',
	display: `inline-flex`,
	verticalAlign: `top`,
}

class ActiveMentors extends Component {
	constructor(props){
		super(props);
		this.props.getActiveMentors();
		this.state = {
			waitMinute: 100,
		};
	}

	render() {
		return(
			<Card>
				<CardText>
					<p>
						<FontIcon className='material-icons' style={iconStyles}>lens</FontIcon>
						<strong>{` `}{this.props.user.mentors.length}</strong>
						{`${this.props.user.mentors.length > 1 ?' mentors':' mentor'}
						online. Estimated wait: `} <strong>{this.state.waitMinute} minutes</strong>
					</p>
				</CardText>
			</Card>
		);
	}
}

export default ActiveMentors;