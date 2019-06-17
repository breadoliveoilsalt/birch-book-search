import React from 'react'

import BookRecord from './BookRecord'
import SearchResultsFooter from './SearchResultsFooter'

const SearchResultsList = (props) => {

  // add logic so that message appears if there are no search results, like "Use the Search Bar above to begin"

  const listToDisplay = props.results.map( result => {
    return (
      <BookRecord bookInfo={result} />
    )
  })

  return (
    <div>
      {listToDisplay}
      <SearchResultsFooter />
    </div>
  )

}

export default SearchResultsList
