import React from 'react'

import Loader from './Loader'
import LoadMoreResultsButton from './LoadMoreResultsButton'

const SearchResultsFooter = ({
  makingBookAPIRequest,
  resultsDisplayed,
  resultsNumber,
  handleLoadMoreResults,
  jumpToTopOfResults }) => {

  if (makingBookAPIRequest) {
    return (
      <div className="search-results-footer">
        <Loader />
      </div>
    )
  } else if (resultsNumber > resultsDisplayed) {
    return (
      <div className="search-results-footer">
        <LoadMoreResultsButton handleLoadMoreResults={handleLoadMoreResults} />
        <p><a className="bold-text" href="" onClick={jumpToTopOfResults}> Jump To Top of Results </a> </p>
      </div>
    )
  } else if (resultsNumber > 0 && resultsDisplayed >= resultsNumber) {
    return (
      <div className="search-results-footer">
        <p> End of results. </p>
      </div>
    )
  } else {
    return (
      <div className="search-results-footer">
        <p className="search-results-header-text"> Use the Search Bar above to begin! </p>
      </div>
    )
  }

}

export default SearchResultsFooter
