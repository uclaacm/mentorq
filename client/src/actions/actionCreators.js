import * as api from '../api';

/**
 * @description Pings the socket to broadcast a new ticket
 */
export function submitTicket(ticket) {
	return dispatch => dispatch({ type: 'socket/ticket/new', ticket });
}

export function claimTicket(ticketId) {
	return dispatch => dispatch({ type: 'socket/ticket/claim', ticketId });
}

export function unclaimTicket(ticketId) {
	return dispatch => dispatch({ type: 'socket/ticket/unclaim', ticketId });
}

export function resolveTicket(ticketId) {
	return dispatch => dispatch({ type: 'socket/ticket/resolve', ticketId });
}

export function ticketCreated(newTicket) {
	return (dispatch, prevState) => { // eslint-disable-line
		dispatch({ type: 'SOCKET_TICKET_NEW', newTicket });
	};
}

export function ticketClaimed(ticketId, mentorId) {
	return (dispatch, prevState) => { // eslint-disable-line
		dispatch({ type: 'SOCKET_TICKET_CLAIMED', ticketId, mentorId });
	};
}

export function ticketUnclaimed(ticketId) {
	return (dispatch, prevState) => { // eslint-disable-line
		dispatch({ type: 'SOCKET_TICKET_UNCLAIMED', ticketId });
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
