import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store';

// Our own components
import { App } from './components';

// Register service worker
import registerServiceWorker from './registerServiceWorker';
import './index.css'; // Our own main stylesheet

const router =
	<MuiThemeProvider>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</MuiThemeProvider>;
ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
