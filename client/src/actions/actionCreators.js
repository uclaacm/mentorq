import * as api from '../api';

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
			});
	};
}

export function getCurrentUser() {
	return (dispatch, prevState) => { // eslint-disable-line
		api.getCurrentUser()
			.then(current => {
				dispatch({ type: 'SET_CURRENT_USER', current });
			});
	};
}

export function socketTest(message) {
	return (dispatch, prevState) => { // eslint-disable-line
		dispatch({ type: 'socket/test', message });
	};
}

export function createTicket(newTicket) {
	return (dispatch, prevState) => { // eslint-disable-line
		dispatch({ type: 'SOCKET_NEW_TICKET', newTicket });
	};
}

export function claimTicket(mentor, claimedTicket) {
	return (dispatch, prevState) => { // eslint-disable-line
		dispatch({ type: 'SOCKET_CLAIM_TICKET', mentor, claimedTicket });
	};
}

export function unclaimTicket(unclaimedTicket) {
	return (dispatch, prevState) => { // eslint-disable-line
		dispatch({ type: 'SOCKET_UNCLAIMED_TICKET', unclaimedTicket });
	};
}

/**
 * @description Calls the API method to get all active mentors user object
 */
export function getActiveMentors() {
	return (dispatch, prevState) => { // eslint-disable-line
		api.getActiveMentors()
			.then(response => dispatch({ type: 'GET_ACTIVE_MENTORS', mentors: response }));
	};
}
