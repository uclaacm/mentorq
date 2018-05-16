import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';
import { Lens } from '@material-ui/icons';

const iconStyles = {
	fontSize: 16,
	color: '#4CAF50',
	display: 'inline-flex',
	verticalAlign: 'top',
};

class ActiveMentors extends Component {
	constructor(props) {
		super(props);
		this.state = {
			waitMinute: 100,
		};
		this.props.getActiveMentors();
	}

	render() {
		const numActive = this.props.user.mentors.length;
		return(
			<Card>
				<CardContent>
					<p>
						<FontIcon className='material-icons' style={iconStyles}>lens</FontIcon>
						<strong>{` `}{numActive}</strong>
						{`${numActive > 1 ?' mentors':' mentor'}
						online. Estimated wait: `} <strong>{this.state.waitMinute} minutes</strong>
					</p>
				</CardContent>
			</Card>
		);
	}
}

export default ActiveMentors;