const defaultState = {
  userSearchTerms: null,
  resultsPerSearch: 20,
  searchStartingId: 0,
  results: []
}

function currentSearchReducer(state = defaultState, action) {
  switch(action.type) {
    case 'LOAD_SEARCH_TERMS':
      return Object.assign({}, state, {userSearchTerms: action.payload})
    case 'INCREASE_SEARCH_STARTING_ID':
        return Object.assign({}, state, {searchStartingId: state.searchStartingId + state.resultsPerSearch})
    case 'LOAD_SEARCH_RESULTS':
      return Object.assign({}, state, {results: [...state.results, ...action.payload]})
    case 'RESET_SEARCH':
      return defaultState
    default:
      return state
  }
}

export default currentSearchReducer
