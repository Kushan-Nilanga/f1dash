import {combineReducers} from 'redux'
import trackdataReducer from './trackdata'

const rootReducer = combineReducers({
	// all reducers go in here
	trackdata : trackdataReducer
})

export default rootReducer;