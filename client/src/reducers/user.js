export default function UserReducer(state = { mentors: [], current: null }, action) {
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
		if (action.current === '') {
			return {
				...state,
				current: null
			};
		}
		return {
			...state,
			current: action.current
		};
	default:
		return state;
	}
}
