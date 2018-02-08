import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

const router = (
	<MuiThemeProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</MuiThemeProvider >
);

ReactDOM.render(
	router,
	document.getElementById('root')
);