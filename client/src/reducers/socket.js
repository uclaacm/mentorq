var SocketReducer = (state = {
	message: null,
	tickets: []
}, action) => {
	switch (action.type) {
	case 'SOCKET_TEST':
		return {
			...state,
			message: action.message
		};
	case 'SOCKET_NEW_TICKET': {
		let newTicket = action.ticket;
		newTicket.timestamp = new Date(newTicket.timestamp);
		return {
			...state,
			tickets: [...state.tickets, newTicket]
		};
	}
	default:
		return state;
	}
};

export default SocketReducer;