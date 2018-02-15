import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import mentorQ from './reducers';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App.jsx';

let store = createStore(mentorQ);

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