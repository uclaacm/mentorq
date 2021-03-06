// N.B.: Change api/controllers/ReduxStateController.js whenever this is changed.
export default function userReducer(state = { mentors: [], current: null }, action) {
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
			current: action.current === '' ? null : action.current
		};
	default:
		return state;
	}
}
