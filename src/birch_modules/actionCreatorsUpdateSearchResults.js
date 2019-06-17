export function loadSearchTerms(searchTerms) {
  return (
    {type: 'LOAD_SEARCH_TERMS',
    payload: searchTerms}
  )
}

export function increaseSearchStartingID() {
  return (
    {type: 'INCREASE_SEARCH_STARTING_ID'}
  )
}

export function loadSearchResults(results) {
  return (
    {type: 'LOAD_SEARCH_RESULTS',
    payload: results}
  )
}

export function loadResultNumber(num) {
  return (
    {type: 'LOAD_RESULT_NUMBER',
    payload: num}
  )
}

export function resetSearch() {
  return (
    {type: 'RESET_SEARCH'}
  )
}
