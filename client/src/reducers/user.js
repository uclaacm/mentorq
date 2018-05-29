export default function UserReducer(state = { mentors: [], currentUser: null }, action) {
	switch (action.type) {
	case 'USER_TEST':
		return {
			...state,
			test: action.test
		};
	case 'GET_ACTIVE_MENTORS':
		return {
			...state,
			mentors: action.mentors
		};
	case 'SET_CURRENT_USER':
		return {
			...state,
			currentUser: action.currentUser
		};
	default:
		return state;
	}
}
