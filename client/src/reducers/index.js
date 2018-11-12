import UserReducer from './user';
import SocketReducer from './socket';

// N.B.: Change api/controllers/ReduxStateController.js whenever this is changed.
function rootReducer(state = {}, action) {
	if (action.type === 'SOCKET_INITIAL_STATE') {
		return action.initialState;
	}
	return {
		user: UserReducer(state.user, action),
		socket: SocketReducer(state.socket, action, state.user)
	};
}

export default rootReducer;
