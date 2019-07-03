import React from 'react'

import SearchResultsHeader from './SearchResultsHeader'
import BookRecord from './BookRecord'
import SearchResultsFooter from './SearchResultsFooter'

const SearchResultsList = ({
  results,
  resultsNumber,
  makingBookAPIRequest,
  handleLoadMoreResults,
  jumpToTopOfResults }) => {

  let resultsDisplayed = results.length

  const listToDisplay = results.map( (result, index) => {
    return (
      <BookRecord key={index} number={index + 1} bookInfo={result} />
    )
  })

  return (
    <div className="search-results-container">

      <SearchResultsHeader
        resultsNumber={resultsNumber}
      />

      {listToDisplay}

      <SearchResultsFooter
        makingBookAPIRequest={makingBookAPIRequest}
        resultsNumber={resultsNumber}
        resultsDisplayed={resultsDisplayed}
        handleLoadMoreResults={handleLoadMoreResults}
        jumpToTopOfResults={jumpToTopOfResults}
      />

    </div>
  )

}

export default SearchResultsList
