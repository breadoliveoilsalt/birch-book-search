import React from 'react'

import SearchResultsHeader from './SearchResultsHeader'
import BookRecord from './BookRecord'
import SearchResultsFooter from './SearchResultsFooter'

const SearchResultsList = (props) => {

  // add logic so that message appears if there are no search results, like "Use the Search Bar above to begin"
  // This should have a header about total results

  const listToDisplay = props.results.map( result => {
    return (
      <BookRecord bookInfo={result} />
    )
  })

  return (
    <div>
      <SearchResultsHeader />
      {listToDisplay}
      <SearchResultsFooter />
    </div>
  )

}

export default SearchResultsList
