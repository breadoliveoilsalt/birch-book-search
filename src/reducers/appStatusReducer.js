const defaultState = {
  makingBookAPIRequest: false,
  currentError: null
}

function appStatusReducer(state = defaultState, action) {
  switch(action.type) {
    case 'LOAD_ERROR':
      return Object.assign({}, state, {currentError: action.payload})
    case 'DELETE_ERROR':
      return Object.assign({}, state, {currentError: null})
    case 'BEGIN_BOOK_API_REQUEST':
      return Object.assign({}, state, {makingBookAPIRequest: true})
    case 'END_BOOK_API_REQUEST':
      return Object.assign({}, state, {makingBookAPIRequest: false})
    default:
      return state
  }
}

export default appStatusReducer
