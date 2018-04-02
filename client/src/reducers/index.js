import { combineReducers } from 'redux';
import TextReducer from './text.js';
import SocketReducer from './socket.js';

const reducers = combineReducers({
	textReducer: TextReducer,
	socketReducer: SocketReducer
});

export default reducers;