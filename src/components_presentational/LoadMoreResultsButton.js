import React from 'react'

const LoadMoreResultsButton = ({ handleLoadMoreResults }) => {

  return (
    <input type="submit" onClick={handleLoadMoreResults} value="Load More Results" />
  )

}

export default LoadMoreResultsButton
