import { combineReducers } from 'redux'
import appStatus from './appStatus'
import currentSearch from './currentSearch'


const rootReducer = combineReducers(
  {
    appStatus: appStatus,
    currentSearch: currentSearch
  }
)

export default rootReducer
