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
			numActive: 0,
			waitMinute: 100,
		};
	}

	render() {
		return (
			<Card>
				<CardContent>
					<p>
						<Lens style={iconStyles} />
						<strong>{' '}{this.state.numActive}</strong>
						{`${this.state.numActive > 1 ? ' mentors' : ' mentor'}
						online. Estimated wait: `} <strong>{this.state.waitMinute} minutes</strong>
					</p>
				</CardContent>
			</Card>
		);
	}
}

export default ActiveMentors;