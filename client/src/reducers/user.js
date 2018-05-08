export default function UserReducer(state = {}, action) {
	switch (action.type) {
	case 'USER_TEST':
		return {
			...state,
			test: action.test
		};
	default:
		return state;
	}
}
