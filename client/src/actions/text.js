export const addText = (text) => {
	console.log('addText called');
	return {
		type: 'ADD_TEXT',
		text: text
	};
};