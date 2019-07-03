import React from 'react'

const ClearSearchButton = ({ handleClearSearch }) => {

  return (
    <input id="clear-search-button" type="submit" onClick={handleClearSearch} value="Clear Search" />
  )

}

export default ClearSearchButton
