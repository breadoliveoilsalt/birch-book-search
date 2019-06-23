import React, { Component } from 'react'

import { connect } from 'react-redux'
import { loadError, deleteError, beginBookAPIRequest, endBookAPIRequest } from '../birch_modules/actionCreatorsAppStatus'
import { loadSearchTerms, increaseSearchStartingID, loadSearchResults, resetSearch, loadResultNumber } from '../birch_modules/actionCreatorsUpdateSearchResults'
import { getBookRecordsBasicSearch } from '../birch_modules/getBookRecordsThunk'

import SearchBar from '../components_presentational/SearchBar'
import ClearSearchButton from '../components_presentational/ClearSearchButton'
import ErrorDisplay from '../components_presentational/ErrorDisplay'
import SearchResultsList from '../components_presentational/SearchResultsList'

export class SearchLayoutAndLogic extends Component {

  constructor(props) {
    super(props)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    this.handleClearSearch = this.handleClearSearch.bind(this)
    this.handleLoadMoreResults = this.handleLoadMoreResults.bind(this)
    this.jumpToTopOfResults = this.jumpToTopOfResults.bind(this)
  }

  handleSearchSubmit(event) {
    event.preventDefault()
    this.props.deleteError()
    this.props.resetSearch()
    this.props.beginBookAPIRequest()
    let searchTerms = this.getSearchTerms()
    let escapedSearchTerms = this.escapeSearchTerms(searchTerms)
    if (escapedSearchTerms === "") {
      this.props.endBookAPIRequest()
      this.props.loadError("Please enter a search term and try again.")
      return
    }
    this.props.loadSearchTerms(escapedSearchTerms)
    this.props.getBookRecordsBasicSearch({
      searchTerms: escapedSearchTerms,
      serachStartingID: this.props.searchStartingID,
      resultsPerSearch: this.props.resultsPerSearch})
  }

  getSearchTerms() {
    return document.getElementById("search-input").value
  }

  escapeSearchTerms(searchTerms) {
    // To consider: What more to escape? Does the component propertly have responsibility for this?
    return searchTerms.trim()
  }

  handleClearSearch(event) {
    event.preventDefault()
    this.props.deleteError()
    this.props.resetSearch()
    document.getElementById("search-input").value = ""
  }

  handleLoadMoreResults(event) {
    event.preventDefault()
    this.props.beginBookAPIRequest()
    let tempStartingID = this.props.searchStartingID + this.props.resultsPerSearch
    this.props.getBookRecordsBasicSearch({
      searchTerms: this.props.userSearchTerms,
      searchStartingID: tempStartingID,
      resultsPerSearch: this.props.resultsPerSearch})
    this.props.increaseSearchStartingID()
    // This odd sequence is due to a delay in the dispatching actions.  See commit 75fbcd8
  }

  jumpToTopOfResults(event) {
    event.preventDefault()
    document.getElementById("search-results-header").scrollIntoView(true)
  }

  render() {

    return(

      <div className="">

        <SearchBar
          handleSearchSubmit={this.handleSearchSubmit}
        />

        <ClearSearchButton
          clearSearch={this.handleClearSearch}
        />

        <ErrorDisplay
          errorMessage={this.props.currentError}
        />

        <SearchResultsList
          results={this.props.results}
          resultNumber={this.props.resultNumber}
          makingBookAPIRequest={this.props.makingBookAPIRequest}
          handleLoadMoreResults={this.handleLoadMoreResults}
          jumpToTopOfResults={this.jumpToTopOfResults}
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
    getBookRecordsBasicSearch: (searchProperties) => dispatch(getBookRecordsBasicSearch(searchProperties))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchLayoutAndLogic)
