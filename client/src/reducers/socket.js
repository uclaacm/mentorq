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
		return {
			...state,
			tickets: [...state.tickets, newTicket]
		};
	}
	case 'SOCKET_ERROR': {
		const error = action.error;
		console.error(error);
		break;
	}
	default:
		return state;
	}
}
