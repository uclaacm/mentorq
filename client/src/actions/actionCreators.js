import * as api from '../api';

/**
 * @description Calls the API method to get username and update store
 */
export function getTest(cb) {
    return (dispatch, prevState) => { // eslint-disable-line
		api.getTest()
			.then(response => dispatch({ type: 'USER_TEST', test: response }))
			.then(() => { if (cb) cb(); })
			.catch(error => console.error('Error in getTest: ' + error));
	};
}

export function socketTest(message) {
    return (dispatch, prevState) => { // eslint-disable-line
		dispatch({ type: 'socket/test', message });
	};
}