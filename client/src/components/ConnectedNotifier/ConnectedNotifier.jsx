import { connect } from 'react-redux';
import { Notifier } from '..';

const trigger = (curProps, prevProps, notify) => {
	if (curProps.pendingTickets < prevProps.pendingTickets) {
		for (let i = curProps.pendingTickets; i < prevProps.pendingTickets; i++) {
			notify('Request submitted.');
		}
	}
	const previouslyWaiting = new Set();
	for (const ticket of prevProps.tickets) {
		if (ticket.requestorId === prevProps.userId && !ticket.mentorId) {
			previouslyWaiting.add(ticket.id);
		}
	}
	for (const ticket of curProps.tickets) {
		if (ticket.mentorId && previouslyWaiting.has(ticket.id)) {
			notify(`${ticket.mentorName} is on their way!`);
			break;
		}
	}
};

const ConnectedNotifier = connect(
	state => ({
		pendingTickets: state.socket.pendingTickets,
		tickets: state.socket.tickets,
		userId: state.user.current && state.user.current.id,
		trigger
	})
)(Notifier);

export default ConnectedNotifier;
