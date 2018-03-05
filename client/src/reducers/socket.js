var SocketReducer = (state = {
	socket: 'socket-test'
}, action) => {
	switch (action.type) {
	case 'SOCKET_ACTION':
		return Object.assign({}, {message:action.data});
	default:
		return state;
	}
};

export default SocketReducer;