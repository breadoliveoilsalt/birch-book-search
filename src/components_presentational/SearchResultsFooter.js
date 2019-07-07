import React from 'react'

import Loader from './Loader'
import LoadMoreResultsButton from './LoadMoreResultsButton'

const SearchResultsFooter = ({
  makingBookAPIRequest,
  resultsDisplayed,
  resultsNumber,
  handleLoadMoreResults }) => {

  let display = <p> Use the Search Bar above to begin! </p>

  let moreResultsToDisplay = resultsDisplayed < resultsNumber
  let allResultsDisplayed = resultsNumber > 0 && resultsDisplayed >= resultsNumber

  if (makingBookAPIRequest) {
    display = <Loader />
  } else if (moreResultsToDisplay) {
    display = <LoadMoreResultsButton handleLoadMoreResults={handleLoadMoreResults} />
  } else if (allResultsDisplayed) {
    display = <p>End of results.</p>
  }

  return (
    <div className="search-results-footer">
      {display}
    </div>
  )

}

export default SearchResultsFooter
