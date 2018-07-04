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
	case 'SOCKET_TICKET_NEW': {
		const { timeFiled } = action.newTicket;
		const ticketWithDate = { ...action.newTicket, mentorName: null, timeFiled: new Date(timeFiled) };
		return {
			...state,
			tickets: [ticketWithDate, ...state.tickets]
		};
	}
	case 'SOCKET_TICKET_CLAIMED': {
		return {
			...state,
			tickets: state.tickets.map(ticket => {
				if (ticket._id === action.ticketId) {
					return { ...ticket, mentorName: action.mentorName, isActive: false };
				}
				return ticket;
			})
		};
	}
	case 'SOCKET_TICKET_UNCLAIMED': {
		return {
			...state,
			tickets: state.tickets.map(ticket => {
				if (ticket._id === action.ticketId) {
					return { ...ticket, mentorName: null, isActive: true };
				}
				return ticket;
			})
		};
	}
	case 'SOCKET_TICKET_RESOLVED': {
		return {
			...state,
			tickets: state.tickets.filter(({ _id }) => _id !== action.ticketId)
		};
	}
	default:
		return state;
	}
}
