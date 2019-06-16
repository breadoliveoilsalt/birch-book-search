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
      default:
        return state
    }
}

export default appStatusReducer
