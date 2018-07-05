// N.B.: Change api/controllers/ReduxStateController.js whenever this is changed.
export default function SocketReducer(state = {
	tickets: []
}, action) {
	switch (action.type) {
	case 'SOCKET_TICKET_NEW': {
		return {
			...state,
			tickets: [action.newTicket, ...state.tickets]
		};
	}
	case 'SOCKET_TICKET_CLAIMED': {
		const {
			ticketId,
			mentorId,
			mentorName
		} = action;

		return {
			...state,
			tickets: state.tickets.map(ticket => {
				if (ticket._id === ticketId) {
					return {
						...ticket,
						mentorId,
						mentorName,
						isActive: false
					};
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
					return {
						...ticket,
						mentorId: null,
						mentorName: null,
						isActive: true
					};
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
