/**
 * The App component wraps the Main component and the Redux library
 * to bind the action creators and datastore to properties in the component
 */

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Main from './Main/Main';

// These are the properties we'll automatically pass to Main
function mapStateToProps(state) {
	const isSignedIn = Boolean(state.user.current);
	const isAdmin = isSignedIn && state.user.current.isAdmin;
	return { isSignedIn, isAdmin };
}

const App = withRouter(connect(mapStateToProps)(Main));

export default App;
