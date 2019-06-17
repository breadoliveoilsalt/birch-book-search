import React, { Component } from 'react'

import SearchBar from '../components_presentational/SearchBar'
import ClearSearchButton from '../components_presentational/ClearSearchButton'
import Divider from '../components_presentational/Divider'



/*
Need to draft for searchbar
this.props.handleSearchSubmit
this.props.handleSearchInput
*/


class SearchLayoutAndLogic extends Component {

  constructor(props) {
    super(props)
    // this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }


  // handleSearchInput(event) {
  //   debugger
  // }

  handleSearchSubmit(event) {
    event.preventDefault()
    let userInput = document.getElementById("search-input").value
    // probably should look into escaping user user input
    // might want to see react hooks
    console.log("Here's what the user entered: ", userInput)
  }

  clearSearch(event) {
    event.preventDefault()
    console.log("Search Cleared!")
  }

  render() {

    return(

      <div className="">
        <SearchBar
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />

        <ClearSearchButton
          clearSearch={this.clearSearch}
        />

        <Divider />


      </div>

    )

  }

}

export default SearchLayoutAndLogic
