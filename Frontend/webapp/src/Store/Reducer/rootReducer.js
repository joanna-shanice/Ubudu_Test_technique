import authReducer from './userReducer'
import { combineReducers } from 'redux'
import questionReducer from './qcmReducer'
import participationReducer from './participationReducer'


const rootReducer = combineReducers ({
    auth: authReducer,
    questions: questionReducer,
    participation: participationReducer
   
})

export default rootReducer