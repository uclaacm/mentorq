import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	claimTicket,
	unclaimTicket,
	resolveTicket
} from '../../actions/actionCreators';
import TicketList from '../TicketList/TicketList';

function filterTickets(tickets, user) {
	// If the user is a mentor but not an admin, only display tickets that are
	// active or claimed by the user.
	if (user.isMentor && !user.isAdmin) {
		return tickets.filter(ticket => ticket.isActive || ticket.mentorId === user._id);
	}

	// If the user isn't a mentor or an admin, every ticket in tickets must be
	// requested by the user. Display all tickets.
	// If the user is an admin, display all tickets.
	return tickets;
}

function mapStateToProps(state) {
	return {
		tickets: filterTickets(state.socket.tickets, state.user.current),

		// TODO: only pass a requisite subset of all user properties, after Ticket
		// is fully implemented.
		user: state.user.current
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		claimTicket,
		unclaimTicket,
		resolveTicket
	}, dispatch);
}

const ConnectedTicketList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TicketList);

export default ConnectedTicketList;
