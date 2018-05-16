export default function UserReducer(state = { mentors: [] }, action) {
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
	default:
		return state;
	}
}
