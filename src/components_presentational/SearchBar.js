import React from 'react'

const SearchBar = (props) => {

  return (
    <div className="">
      <form onSubmit={props.handleSearchSubmit}>
        <input id="search-input" type="text" />
        <input id="search-sumbit-button" type="submit" value="Search" />
      </form>
    </div>
  )

}

export default SearchBar
