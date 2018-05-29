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
		if (action.currentUser == "") {
			return {
				...state,
				currentUser: null
			};
		}
		return {
			...state,
			currentUser: action.currentUser
		};
	default:
		return state;
	}
}
