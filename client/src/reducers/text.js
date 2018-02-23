var TextReducer = (state = {
	text: 'abc'
}, action) => {
	switch (action.type) {
	case 'ADD_TEXT':
		console.log('TextReducer called');
		return {
			...state,
			text: action.text
		};
	default: {
		return state;
	}
	}
};

export default TextReducer;