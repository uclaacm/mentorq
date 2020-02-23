import PropTypes from 'prop-types';

export const ticketShape = {
	id: PropTypes.number.isRequired,
	requestorId: PropTypes.number.isRequired,
	requestorName: PropTypes.string.isRequired,
	mentorId: PropTypes.number,
	mentorName: PropTypes.string,
	contactInfo: PropTypes.string.isRequired,
	timeFiled: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	tableNum: PropTypes.string.isRequired,
	isActive: PropTypes.bool
};

export const userShape = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.string,
	isAdmin: PropTypes.bool.isRequired,
	isMentor: PropTypes.bool.isRequired,
	skills: PropTypes.arrayOf(PropTypes.string.isRequired)
};
