var SocketReducer = (state = {
	message: null
}, action) => {
	switch (action.type) {
	case 'SOCKET_ACTION':
		return {
			...state,
			message: action.message	
		};
	default:
		return state;
	}
};

export default SocketReducer;