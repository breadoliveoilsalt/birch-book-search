import React from 'react'

/* needs to have functions something like this:

<div className="search-bar">
  <form onSubmit={this.props.handleSearchSubmit}>
    <input type="text" onChange={this.props.handleSearchInput} />
    <input type="submit" value="Submit" />
  </form>
</div>

*/


const SearchBar = (props) => {

  return (
    <div className="search-bar">
      <form onSubmit={props.handleSearchSubmit}>
        <input className="input-border" id="search-input" type="text" />
        <input className="sumbit-button" type="submit" value="Search" />
      </form>
    </div>
  )

}

export default SearchBar
