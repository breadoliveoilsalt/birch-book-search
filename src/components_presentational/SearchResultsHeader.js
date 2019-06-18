import React from 'react'

import BigDivider from './BigDivider'

const SearchResultsHeader = (props) => {

  if (props.resultNumber !== 0) {
    return (
      <div>
        <BigDivider />
        {props.resultNumber} result(s) returned.
        <BigDivider />
      </div>
    )
  } else {
    return null
  }
}

export default SearchResultsHeader
