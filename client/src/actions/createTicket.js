export const createTicket = (Ticket) => {
	return {
		type: 'CREATE_TICKET',
		ticket: Ticket
	};
};