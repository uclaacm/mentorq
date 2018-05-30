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
		const { timeFiled } = action.newTicket;
		const ticketWithDate = { ...action.newTicket, timeFiled: new Date(timeFiled) };
		return {
			...state,
			tickets: [...state.tickets, ticketWithDate]
		};
	}
	case 'SOCKET_ERROR': {
		return {
			...state,
			errorMsg: { ...action.error }
		}
	}
	default:
		return state;
	}
}
