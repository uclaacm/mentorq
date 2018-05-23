import * as api from '../api';

/**
 * @description Calls the API method to get username and update store
 */
export function getTest(cb) {
	console.log('get test called');
    return (dispatch, prevState) => { // eslint-disable-line
		api.getTest()
			.then(response => { console.log(response); dispatch({ type: 'USER_TEST', test: response });})
			.then(() => { if (cb) cb(); })
			.catch(error => console.error('Error in getTest: ' + error));
	};
}

export function getCurrentUser() {
	return (dispatch, prevState) => { // eslint-disable-line
		api.getCurrentUser()
			.then(response => {dispatch({type: 'GET_CURRENT_USER', current: response});});
	};
}

export function socketTest(message) {
    return (dispatch, prevState) => { // eslint-disable-line
		dispatch({ type: 'socket/test', message });
	};
}