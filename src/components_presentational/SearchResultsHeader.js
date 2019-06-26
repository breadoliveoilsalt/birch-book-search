import React from 'react'

import BigDivider from './BigDivider'

const SearchResultsHeader = (props) => {

  if (props.resultNumber !== 0) {
    return (
      <div id="search-results-header">
        <BigDivider className="search-results-header"/>
          {props.resultNumber} potential result(s)
        <BigDivider />
      </div>
    )
  } else {
    return null
  }
  
}

export default SearchResultsHeader
