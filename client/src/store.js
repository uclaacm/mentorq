import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';

// import socket.io
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

// import the root reducer
import rootReducer from './reducers/index';
import { serverBaseURL } from './config';

const defaultState = {};

const socket = io(String(serverBaseURL));
const socketIoMiddleware = createSocketIoMiddleware(socket, 'socket/');

const store = createStore(
	rootReducer,
	defaultState,
	composeWithDevTools(
		applyMiddleware(thunk),
		applyMiddleware(socketIoMiddleware),
		persistState()
	)
);

if (module.hot) {
	module.hot.accept('./reducers/', () => {
		// eslint-disable-next-line global-require
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;
