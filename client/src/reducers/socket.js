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
	case 'SOCKET_CLAIM_TICKET': {
		const claimedTicket = { ...action.claimedTicket, mentor: action.mentor, isActive: false };
		return {
			...state,
			tickets: [...state.tickets, claimedTicket]
		};
	}
	case 'SOCKET_UNCLAIM_TICKET': {
		const unclaimedTicket = { ...action.unclaimedTicket, mentor: null, isActive: true };
		return {
			...state,
			tickets: [...state.tickets, unclaimedTicket]
		};
	}
	case 'SOCKET_RESOLVE_TICKET': {
		const resolvedTicket = { ...action.resolvedTicket, isResolved: true, isActive: false };
		return {
			...state,
			tickets: [...state.tickets, resolvedTicket]
		};
	}
	default:
		return state;
	}
}
