import React from 'react'

const ClearSearchButton = ({ clearSearch }) => {

  return (
    <div className="">
      <form onSubmit={clearSearch}>
        <input id="clear-search-button" type="submit" value="Clear Search" />
      </form>
    </div>
  )

}

export default ClearSearchButton
