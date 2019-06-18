import React from 'react'

const SearchResultsFooter = (props) => {

  if (props.makingBookAPIRequest) {
    return (
      <div>
        Loading...!
      </div>
    )
  } else if (props.resultsDisplayed < props.resultNumber) {
    return (
      <div>
        Load more button
      </div>
    )
  } else if (props.resultsNumber > 0 && props.resultsDisplayed === props.resultNumber) {
    return (
      <div>
        End of results.
      </div>
    )
  } else {
    return null
  }
}

export default SearchResultsFooter
