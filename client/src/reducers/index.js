import { combineReducers } from 'redux';
import TextReducer from './text.js';

const reducers = combineReducers({
	textReducer: TextReducer
});

export default reducers;