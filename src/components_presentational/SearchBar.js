import React from 'react'

const SearchBar = ({ handleSearchSubmit, loadSearchTerms, userSearchTerms }) => {

  return (
      <form>
        <input id="search-input"
          type="text"
          value={userSearchTerms}
          onChange={(event) => loadSearchTerms(event.target.value)}
        />
        <input type="submit" onClick={handleSearchSubmit} value="Search" />
      </ form>
  )

}

export default SearchBar
