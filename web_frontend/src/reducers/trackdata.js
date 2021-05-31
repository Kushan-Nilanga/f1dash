function trackdataReducer(state = [], action) {
	switch (action.type) {
		case 'ADD_DATA':
			return state + 1
		default:
			return state
	}
}

export default trackdataReducer