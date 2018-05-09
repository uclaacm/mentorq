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
		const newTicket = action.ticket;
		newTicket.timestamp = new Date(newTicket.timestamp);
		return {
			...state,
			tickets: [...state.tickets, newTicket]
		};
	}
	default:
		return state;
	}
}
