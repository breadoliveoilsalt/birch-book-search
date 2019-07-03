import React from 'react'

import BigDivider from './BigDivider'

const SearchResultsHeader = ({ resultsNumber }) => {

  if (resultsNumber !== 0) {
    return (
      <div id="search-results-header">
        <BigDivider />
          {resultsNumber} potential result(s)
        <BigDivider />
      </div>
    )
  } else {
    return null
  }

}

export default SearchResultsHeader
