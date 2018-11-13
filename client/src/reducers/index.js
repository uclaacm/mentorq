import userReducer from './user';
import socketReducer from './socket';

// N.B.: Change api/controllers/ReduxStateController.js whenever this is changed.
function rootReducer(state = {}, action) {
	if (action.type === 'SOCKET_INITIAL_STATE') {
		return action.initialState;
	}
	return {
		user: userReducer(state.user, action),
		socket: socketReducer(state.socket, action, state.user)
	};
}

export default rootReducer;
