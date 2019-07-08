import * as types from '../actions/actionTypes'

const defaultState = {
  userSearchTerms: "",
  resultsPerSearch: 20,
  searchStartingID: 0,
  results: [],
  resultsNumber: 0
}

function currentSearch(state = defaultState, action) {
  switch(action.type) {
    case types.LOAD_SEARCH_TERMS:
      return Object.assign({}, state, {userSearchTerms: action.payload})
    case types.INCREASE_SEARCH_STARTING_ID:
        return Object.assign({}, state, {searchStartingID: state.searchStartingID + state.resultsPerSearch})
    case types.LOAD_SEARCH_RESULTS:
      return Object.assign({}, state, {results: [...state.results, ...action.payload]})
    case types.LOAD_RESULT_NUMBER:
      return Object.assign({}, state, {resultsNumber: action.payload})
    case types.CLEAR_PRIOR_SEARCH:
      return Object.assign({}, state, {searchStartingID: 0, results: [], resultsNumber: 0})
    case types.RESET_SEARCH:
      return defaultState
    default:
      return state
  }
}

export default currentSearch
