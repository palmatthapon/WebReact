import { combineReducers } from 'redux'
import scoreReducer from './score'
import personReducer from './person'

export default combineReducers({
    sore: scoreReducer,
    person: personReducer
})