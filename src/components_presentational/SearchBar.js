import React from 'react'

const SearchBar = ({ handleSearchSubmit, loadSearchTerms }) => {

  return (
    <div className="">
      <form onSubmit={handleSearchSubmit}>
        <input id="search-input" type="text" onChange={(event) => loadSearchTerms(event.target.value)}/>
        <input id="search-sumbit-button" type="submit" value="Search" />
      </form>
    </div>
  )

}

export default SearchBar
