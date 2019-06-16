const defaultState = {
  userQuery: null,
  resultsPerQuery: 20,
  queryStartingId: 0,
  results: []
}

function currentQueryReducer(state = defaultState, action) {
  switch(action.type) {
    case 'LOAD_QUERY_TERMS':
      return Object.assign({}, state, {userQuery: action.payload})
    case 'INCREASE_QUERY_STARTING_ID':
        return Object.assign({}, state, {queryStartingId: queryStartingId + resultsPerPageQuery})
    case 'LOAD_QUERY_RESULTS':
      return Object.assign({}, state, {results: [...state.results, ...action.payload]})
    case 'RESET_QUERY':
      return defaultState
    default:
      return state
  }
}

export default testReducer
