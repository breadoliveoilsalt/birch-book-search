import React, { Component } from 'react'

import { connect } from 'react-redux'
import { loadError, deleteError, beginBookAPIRequest, endBookAPIRequest } from '../birch_modules/actionCreatorsAppStatus'
import { loadSearchTerms, increaseSearchStartingID, loadSearchResults, resetSearch, loadResultNumber } from '../birch_modules/actionCreatorsUpdateSearchResults'
import { getBookRecords } from '../birch_modules/fetchRequestBasicSearch'

import SearchBar from '../components_presentational/SearchBar'
import ClearSearchButton from '../components_presentational/ClearSearchButton'
import ErrorDisplay from '../components_presentational/ErrorDisplay'
import Divider from '../components_presentational/Divider'
import SearchResultsList from '../components_presentational/SearchResultsList'



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
    let searchTerms = document.getElementById("search-input").value
    this.props.getBookRecords(searchTerms, this.props.searchStartingID, this.props.resultsPerSearch)
    // probably should look into escaping user user input
    // might want to see react hooks

  }

  clearSearch(event) {
    event.preventDefault()
    this.props.resetSearch()
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

        <ErrorDisplay
          errorMessage={this.props.currentError}
        />

        <Divider />

        <SearchResultsList
          results={["Larry", "Moe", "Curley"]}
        />


      </div>

    )

  }

}

const mapStateToProps = (state) => {
  return {
    makingBookAPIRequest: state.appStatus.makingBookAPIRequest,
    currentError: state.appStatus.currentError,
    userSearchTerms: state.currentSearch.userSearchTerms,
    resultsPerSearch: state.currentSearch.resultsPerSearch,
    searchStartingID: state.currentSearch.searchStartingID,
    results: state.currentSearch.results,
    resultNumber: state.currentSearch.resultNumber
  }
}

// I may not need many of these here, like delete error and load error

const mapDispatchToProps = (dispatch) => {
  return {
    loadError: (message) => dispatch(loadError(message)),
    deleteError: () => dispatch(deleteError()),
    beginBookAPIRequest: () => dispatch(beginBookAPIRequest()),
    endBookAPIRequest: () => dispatch(endBookAPIRequest()),
    loadSearchTerms: (searchTerms) => dispatch(loadSearchTerms(searchTerms)),
    increaseSearchStartingID: () => dispatch(increaseSearchStartingID()),
    loadSearchResults: (results) => dispatch(loadSearchResults(results)),
    loadResultNumber: (num) => dispatch(loadResultNumber(num)),
    resetSearch: () => dispatch(resetSearch()),
    getBookRecords:
      (searchTerms, searchStartingID, resultsPerSearch) =>
        dispatch(getBookRecords(searchTerms, searchStartingID, resultsPerSearch))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchLayoutAndLogic)
