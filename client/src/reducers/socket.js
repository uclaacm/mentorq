// N.B.: Change api/controllers/ReduxStateController.js whenever this is changed.
export default function socketReducer(state = {
	tickets: [],
	pendingTickets: 0
}, action, userState = {
	current: null
}) {
	switch (action.type) {
	// When we just submitted a new ticket request.
	case 'socket/ticket/new': {
		return {
			...state,
			pendingTickets: state.pendingTickets + 1
		};
	}
	case 'SOCKET_TICKET_NEW': {
		const newState = {
			...state,
			tickets: [...state.tickets, action.newTicket]
		};
		if (state.pendingTickets && userState.current && action.newTicket.requestorId === userState.current.id) {
			newState.pendingTickets--;
		}
		return newState;
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
				if (ticket.id === ticketId) {
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
				if (ticket.id === action.ticketId) {
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
			tickets: state.tickets.filter(({ id }) => id !== action.ticketId)
		};
	}
	default:
		return state;
	}
}
