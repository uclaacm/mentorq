function UserReducer(state = {}, action) {
	switch (action.type) {
	case 'USER_TEST':
		return {
			...state,
			test: action.test
		};
	case 'GET_CURRENT_USER':
		return {
			...state,
			current: action.user
		};
	default:
		return state;
	}
}

export default UserReducer;