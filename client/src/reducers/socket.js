export default function SocketReducer(state = {
	message: null,
	tickets: []
}, action) {
	switch (action.type) {
	case 'SOCKET_TEST':
		return {
			...state,
			message: action.message
		};
	case 'SOCKET_NEW_TICKET': {
		const newTicket = action.newTicket;
		const ticketWithDate = { ...newTicket, timeFiled: new Date(newTicket.timeFiled) };
		console.log(newTicket);
		return {
			...state,
			tickets: [...state.tickets, newTicket]
		};
	}
	case 'SOCKET_ERROR': {
		const error = action.error;
		console.error(error);
	}
	default:
		return state;
	}
}
