import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Lens } from '@material-ui/icons';
import PropTypes from 'prop-types';

import { userShape } from '../../shapes';

const styles = () => ({
	icon: {
		color: '#4CAF50',
		display: 'inline-flex',
		verticalAlign: 'top'
	},
	text: {
		fontSize: 16
	}
});

let initing = true;

function ActiveMentors({
	mentors,
	getActiveMentors,
	classes
}) {
	// TODO: Make this live.
	if (initing) {
		getActiveMentors();
		initing = false;
	}

	const numActive = mentors.length;
	return (
		<Card>
			<CardContent>
				<Typography component='p' className={classes.text}>
					<Lens className={classes.icon} />{' '}
					<strong>{numActive}</strong>
					{`${numActive > 1 ? ' mentors' : ' mentor'} online.`}
					{/* Estimated wait: <strong>{waitMinute} minutes</strong> */}
				</Typography>
			</CardContent>
		</Card>
	);
}

ActiveMentors.propTypes = {
	mentors: PropTypes.arrayOf(PropTypes.shape(userShape).isRequired),
	getActiveMentors: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired
};

ActiveMentors.defaultProps = {
	mentors: []
};

export default withStyles(styles)(ActiveMentors);
