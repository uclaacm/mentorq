import { connect } from 'react-redux';
import { submitTicket } from '../../actions/actionCreators';
import { TicketForm } from '..';

const ConnectedTicketForm = connect(null, { submitTicket })(TicketForm);

export default ConnectedTicketForm;
