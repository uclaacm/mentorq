import { combineReducers } from 'redux';

import UserReducer from './user';
import SocketReducer from './socket';

// N.B.: Change api/controllers/ReduxStateController.js whenever this is changed.
const combinedReducer = combineReducers({ user: UserReducer, socket: SocketReducer });

function rootReducer(state = {}, action) {
	if (action.type === 'SOCKET_INITIAL_STATE') {
		return action.initialState;
	}
	return combinedReducer(state, action);
}

export default rootReducer;
