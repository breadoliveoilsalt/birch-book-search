import React from 'react'

import SearchResultsHeader from './SearchResultsHeader'
import BookRecord from './BookRecord'
import SearchResultsFooter from './SearchResultsFooter'

const SearchResultsList = (props) => {

  const resultsDisplayed = props.results.length

  const listToDisplay = props.results.map( result => {
    return (
      <BookRecord bookInfo={result} />
    )
  })

  return (
    <div className="search-results-container">

      <SearchResultsHeader
        resultNumber={props.resultNumber}
      />

      {listToDisplay}

      <SearchResultsFooter
        makingBookAPIRequest={props.makingBookAPIRequest}
        resultNumber={props.resultNumber}
        resultsDisplayed={resultsDisplayed}
        handleLoadMoreResults={props.handleLoadMoreResults}
        jumpToTopOfResults={props.jumpToTopOfResults}
      />

    </div>
  )

}

export default SearchResultsList
