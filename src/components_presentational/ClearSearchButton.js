import React from 'react'

const ClearSearchButton = (props) => {

  return (
    <div className="">
      <form onSubmit={props.clearSearch}>
        <input id="clear-search-button" type="submit" value="Clear Search" />
      </form>
    </div>
  )

}

export default ClearSearchButton
