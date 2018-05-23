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
	console.log('get test called');
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

/**
 * @description Calls the API method to get all active mentors user object
 */
export function getActiveMentors() {
	return (dispatch, prevState) => { // eslint-disable-line
		api.getActiveMentors()
			.then(response => dispatch({ type: 'GET_ACTIVE_MENTORS', mentors: response }))
			.catch(error => console.error('Error in getActiveMentors: ' + error));
	};
}
