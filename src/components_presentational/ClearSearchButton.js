import React from 'react'

const ClearSearchButton = ({ clearSearch }) => {

  return (
    <input id="clear-search-button" type="submit" onClick={clearSearch} value="Clear Search" />
  )

}

export default ClearSearchButton
