import { combineReducers } from 'redux'
import appStatusReducer from './appStatusReducer'
import currentQueryReducer from './currentQueryReducer'


const rootReducer = combineReducers(
  {
    appStatus: appStatusReducer,
    currentQuery: currentQueryReducer
  }
)

export default rootReducer
