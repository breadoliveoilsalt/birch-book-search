import React from 'react'

import Loader from './Loader'
import LoadMoreResultsButton from './LoadMoreResultsButton'

// jump to top of results not needed here or in parent

const SearchResultsFooter = ({
  makingBookAPIRequest,
  resultsDisplayed,
  resultsNumber,
  handleLoadMoreResults }) => {

  let display = <p> Use the Search Bar above to begin! </p>

  if (makingBookAPIRequest) {
    display = <Loader />
  } else if (resultsNumber > resultsDisplayed) {
    display = <LoadMoreResultsButton handleLoadMoreResults={handleLoadMoreResults} />
  } else if (resultsNumber > 0 && resultsDisplayed >= resultsNumber) {
    display = <p> End of results. </p>
  }

  return (
    <div className="search-results-footer">
      {display}
    </div>
  )

}

export default SearchResultsFooter
