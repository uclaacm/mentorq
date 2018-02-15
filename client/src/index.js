import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducers from './reducers';
import App from './App.jsx';

let socket = io('http://localhost:3000');
let socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

let store = applyMiddleware(socketIoMiddleware)(createStore)(reducers);

const router = (
	<MuiThemeProvider>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</MuiThemeProvider>
);

ReactDOM.render(
	router,
	document.getElementById('root')
);