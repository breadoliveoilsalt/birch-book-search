import * as types from './actionTypes'

export function loadSearchTerms(searchTerms) {
  return (
    {type: types.LOAD_SEARCH_TERMS,
    payload: searchTerms}
  )
}

export function increaseSearchStartingID() {
  return (
    {type: types.INCREASE_SEARCH_STARTING_ID}
  )
}

export function loadSearchResults(results) {
  return (
    {type: types.LOAD_SEARCH_RESULTS,
    payload: results}
  )
}

export function loadResultsNumber(num) {
  return (
    {type: types.LOAD_RESULT_NUMBER,
    payload: num}
  )
}

export function clearPriorSearch() {
  return (
    {type: types.CLEAR_PRIOR_SEARCH}
  )
}

export function resetSearch() {
  return (
    {type: types.RESET_SEARCH}
  )
}
