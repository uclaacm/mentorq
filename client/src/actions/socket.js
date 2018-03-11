export const socketAction = (message) => {
	return {
		type: 'SOCKET_ACTION',
		message: message
	};
};