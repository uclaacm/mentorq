import { combineReducers } from 'redux';

import UserReducer from './user';
import SocketReducer from './socket';

const rootReducer = combineReducers({ user: UserReducer, socket: SocketReducer });

export default rootReducer;
