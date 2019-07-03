import React from 'react'

const LoadMoreResultsButton = ({ handleLoadMoreResults }) => {

  return (
    <form onSubmit={handleLoadMoreResults}>
      <input id="search-sumbit-button" type="submit" value="Load More Results" />
    </form>
  )

}

export default LoadMoreResultsButton
