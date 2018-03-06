var SocketReducer = (state, action) => {
	switch (action.type) {
	case 'SOCKET_ACTION':
		return {
			...state,
			message: action.data	
		};
	default:
		return state;
	}
};

export default SocketReducer;