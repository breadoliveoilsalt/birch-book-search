import { combineReducers } from 'redux'
import testReducer from './testReducer'
// import randomDotsReducer from './randomDotsReducer'
// import rainReducer from './rainReducer'


const rootReducer = combineReducers(
  {
    testReducer: testReducer
    // randomDots: randomDotsReducer,
    // rain: rainReducer,

  }
)

export default rootReducer
