import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Lens } from '@material-ui/icons';
import PropTypes from 'prop-types';

const iconStyles = {
	fontSize: 16,
	color: '#4CAF50',
	display: 'inline-flex',
	verticalAlign: 'top'
};

class ActiveMentors extends Component {
	constructor(props) {
		super(props);
		this.state = {
			waitMinute: 100
		};
		this.props.getActiveMentors();
	}

	render() {
		const numActive = this.props.user.mentors.length;
		return (
			<Card>
				<CardContent>
					<p>
						<Lens style={iconStyles} />
						<strong>{` ${numActive}`}</strong>
						{`${numActive > 1 ? ' mentors' : ' mentor'} online. 
						Estimated wait: `} <strong>{this.state.waitMinute} minutes</strong>
					</p>
				</CardContent>
			</Card>
		);
	}
}

ActiveMentors.propTypes = {
	user: PropTypes.object.isRequired,
	getActiveMentors: PropTypes.func.isRequired
};

export default ActiveMentors;
