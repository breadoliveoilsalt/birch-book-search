import { combineReducers } from 'redux'
import appStatusReducer from './appStatusReducer'
import currentSearchReducer from './currentSearchReducer'


const rootReducer = combineReducers(
  {
    appStatus: appStatusReducer,
    currentSearch: currentSearchReducer
  }
)

export default rootReducer
