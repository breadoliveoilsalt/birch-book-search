import React from 'react'

const ClearSearchButton = (props) => {

  // you might want to have logic that this only appears if there are search results

  return (
    <div className="simple-form">
      <form onSubmit={props.clearSearch}>
        <input id="clear-search-button" type="submit" value="Clear Search" />
      </form>
    </div>
  )

}

export default ClearSearchButton
