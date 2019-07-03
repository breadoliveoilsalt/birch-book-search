import React from 'react'

const SearchBar = ({ handleSearchSubmit, loadSearchTerms, userSearchTerms }) => {

  return (
    <div className="">
      <form onSubmit={handleSearchSubmit}>
        <input id="search-input"
          type="text"
          value={userSearchTerms}
          onChange={(event) => loadSearchTerms(event.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  )

}

export default SearchBar
