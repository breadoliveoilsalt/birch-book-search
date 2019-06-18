import React from 'react'

import Loader from './Loader'

const SearchResultsFooter = (props) => {

  if (props.makingBookAPIRequest) {
    return (
      <div className="search-results-footer">
        <Loader />
      </div>
    )
  } else if (props.resultsDisplayed < props.resultNumber) {
    return (
      <div className="search-results-footer">
        <form onSubmit={props.handleLoadMoreResults}>
          <input id="search-sumbit-button" type="submit" value="Load More Results" />
        </form>
      </div>
    )
  } else if (props.resultsNumber > 0 && props.resultsDisplayed === props.resultNumber) {
    return (
      <div className="search-results-footer">
        End of results.
      </div>
    )
  } else {
    return (
      <div className="search-results-footer">
        Use the Search Bar above to begin!
      </div>
    )
  }
}

export default SearchResultsFooter
