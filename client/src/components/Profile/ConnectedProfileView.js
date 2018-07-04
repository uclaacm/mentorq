import { connect } from 'react-redux';
import { ProfileView } from '..';
// TODO: Submission
import {} from '../../actions/actionCreators';

function mapStateToProps() {
	// TODO: Pre-fill form with current values.
	return {};
}

const ConnectedProfileView = connect(mapStateToProps, {})(ProfileView);

export default ConnectedProfileView;
