import PropTypes from 'prop-types';

export const ticketShape = {
	requestorId: PropTypes.string.isRequired,
	mentorName: PropTypes.string,
	contactInfo: PropTypes.string.isRequired,
	timeFiled: PropTypes.instanceOf(Date).isRequired,
	description: PropTypes.string.isRequired,
	tableNum: PropTypes.string.isRequired,
	isActive: PropTypes.boolean
};

export const userShape = {
	_id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.string,
	isAdmin: PropTypes.bool.isRequired,
	isMentor: PropTypes.bool.isRequired,
	skills: PropTypes.arrayOf(PropTypes.string.isRequired)
};
