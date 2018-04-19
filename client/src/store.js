import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';

// import the root reducer
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import socket.io
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import rootReducer from './reducers/index';

const defaultState = {};

let socket = io('http://localhost:8080');
let socketIoMiddleware = createSocketIoMiddleware(socket, 'socket/');

const store = createStore(rootReducer, defaultState,
	composeWithDevTools(
		applyMiddleware(thunk),
		applyMiddleware(socketIoMiddleware)
	));

if (module.hot) {
	module.hot.accept('./reducers/',() => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export const history = createBrowserHistory();
export default store;
