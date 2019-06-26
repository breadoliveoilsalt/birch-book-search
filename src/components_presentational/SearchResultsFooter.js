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
        <p><a className="bold-text" href="" onClick={props.jumpToTopOfResults}> Jump To Top of Results </a> </p>
      </div>
    )
  } else if (props.resultsNumber > 0 && props.resultsDisplayed >= props.resultNumber) {
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
