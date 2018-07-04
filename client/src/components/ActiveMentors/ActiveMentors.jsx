import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Lens } from '@material-ui/icons';
import PropTypes from 'prop-types';

import { userShape } from '../../shapes';

const iconStyles = {
	fontSize: 16,
	color: '#4CAF50',
	display: 'inline-flex',
	verticalAlign: 'top'
};

let initing = true;

function ActiveMentors({
	mentors,
	getActiveMentors
}) {
	// TODO: Make this live.
	if (initing) {
		getActiveMentors();
		initing = false;
	}

	const waitMinute = 100; // TODO
	const numActive = mentors.length;
	return (
		<Card>
			<CardContent>
				<p>
					<Lens style={iconStyles} />
					<strong>{` ${numActive}`}</strong>
					{`${numActive > 1 ? ' mentors' : ' mentor'} online.
					Estimated wait: `} <strong>{waitMinute} minutes</strong>
				</p>
			</CardContent>
		</Card>
	);
}

ActiveMentors.propTypes = {
	mentors: PropTypes.arrayOf(PropTypes.shape(userShape).isRequired),
	getActiveMentors: PropTypes.func.isRequired
};

ActiveMentors.defaultProps = {
	mentors: []
};

export default ActiveMentors;
