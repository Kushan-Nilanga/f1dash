function trackdataReducer(state = [], action) {
	switch (action.type) {
		case 'ADD_DATA':
			return [...state, JSON.stringify(action.data)]
		default:
			return state
	}
}

export default trackdataReducer