export function loadSearchTerms(payload) {
  return (
    {type: 'LOAD_SEARCH_TERMS',
    payload: payload}
  )
}

export function increaseSearchStartingID() {
  return (
    {type: 'INCREASE_SEARCH_STARTING_ID'}
  )
}

export function loadSearchResults(payload) {
  return (
    {type: 'LOAD_SEARCH_RESULTS',
    payload: payload}
  )
}

export function resetSearch() {
  return (
    {type: 'RESET_SEARCH'}
  )
}
