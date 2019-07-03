import React from 'react'

import SearchResultsHeader from './SearchResultsHeader'
import BookRecord from './BookRecord'
import SearchResultsFooter from './SearchResultsFooter'

const SearchResultsList = ({ results, resultNumber, makingBookAPIRequest, handleLoadMoreResults, jumpToTopOfResults}) => {

  const resultsDisplayed = results.length

  const listToDisplay = results.map( (result, index) => {
    return (
      <BookRecord key={index} number={index + 1} bookInfo={result} />
    )
  })

  return (
    <div className="search-results-container">

      <SearchResultsHeader
        resultNumber={resultNumber}
      />

      {listToDisplay}

      <SearchResultsFooter
        makingBookAPIRequest={makingBookAPIRequest}
        resultNumber={resultNumber}
        resultsDisplayed={resultsDisplayed}
        handleLoadMoreResults={handleLoadMoreResults}
        jumpToTopOfResults={jumpToTopOfResults}
      />

    </div>
  )

}

export default SearchResultsList
