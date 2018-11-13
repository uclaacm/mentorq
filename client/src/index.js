import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import history from './history';
import store from './store';

// Our own components
import { App } from './components';

import './index.css'; // Our own main stylesheet

Notification.requestPermission();

const router =
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>;

ReactDOM.render(router, document.getElementById('root'));
