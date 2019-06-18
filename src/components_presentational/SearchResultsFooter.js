import React from 'react'

const SearchResultsFooter = (props) => {

  if (props.makingBookAPIRequest) {
    return (
      <div className="search-results-footer">
        Loading...!
      </div>
    )
  } else if (props.resultsDisplayed < props.resultNumber) {
    return (
      <div className="search-results-footer">
        Load more button
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
