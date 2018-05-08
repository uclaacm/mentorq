import * as api from '../api';

/**
 * @description Pings the socket to broadcast a new ticket
 */
export function submitTicket(ticket) {
	return dispatch => dispatch({ type: 'socket/ticket/new', ticket });
}

/**
 * @description Calls the API method to get username and update store
 */
export function getTest(cb) {
    return (dispatch, prevState) => { // eslint-disable-line
		api.getTest()
			.then(response => dispatch({ type: 'USER_TEST', test: response }))
			.then(() => {
				if (cb) {
					cb();
				}
			})
			.catch(error => console.error('Error in getTest: ' + error));
	};
}

/**
 * @description Pings the socket method socket/test
 */
export function socketTest(message) {
    return (dispatch, prevState) => { // eslint-disable-line
		dispatch({ type: 'socket/test', message });
	};
}
