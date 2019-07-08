import * as types from '../actions/actionTypes'

const defaultState = {
  makingBookAPIRequest: false,
  currentError: null
}

function appStatus(state = defaultState, action) {
  switch(action.type) {
    case types.LOAD_ERROR:
      return Object.assign({}, state, {currentError: action.payload})
    case types.DELETE_ERROR:
      return Object.assign({}, state, {currentError: null})
    case types.BEGIN_BOOK_API_REQUEST:
      return Object.assign({}, state, {makingBookAPIRequest: true})
    case types.END_BOOK_API_REQUEST:
      return Object.assign({}, state, {makingBookAPIRequest: false})
    default:
      return state
  }
}

export default appStatus
