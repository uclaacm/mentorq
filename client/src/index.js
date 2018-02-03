import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App.jsx';

const router = (
	<BrowserRouter>
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider >
	</BrowserRouter>
);

ReactDOM.render(
	router,
	document.getElementById('root')
);