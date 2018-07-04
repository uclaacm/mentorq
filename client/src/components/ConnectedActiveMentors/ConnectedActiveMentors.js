import { connect } from 'react-redux';
import { getActiveMentors } from '../../actions/actionCreators';
import { ActiveMentors } from '..';

const ConnectedActiveMentors = connect(
	state => ({
		mentors: state.user.mentors
	}),
	{ getActiveMentors }
)(ActiveMentors);

export default ConnectedActiveMentors;
