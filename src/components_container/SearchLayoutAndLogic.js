import React, { Component } from 'react'

import { connect } from 'react-redux'
import { loadError, deleteError, beginBookAPIRequest, endBookAPIRequest } from '../birch_modules/actionCreatorsAppStatus'
import { loadSearchTerms, increaseSearchStartingID, clearPriorSearch, resetSearch } from '../birch_modules/actionCreatorsUpdateSearchResults'
import { getBookRecordsBasicSearch } from '../birch_modules/getBookRecordsThunk'

import { FetchRequest } from '../birch_modules/fetchRequestClass'
import { BookRecord } from '../birch_modules/bookRecordModel'

import SearchBar from '../components_presentational/SearchBar'
import ClearSearchButton from '../components_presentational/ClearSearchButton'
import ErrorDisplay from '../components_presentational/ErrorDisplay'
import SearchResultsList from '../components_presentational/SearchResultsList'
import JumpToTopButton from '../components_presentational/JumpToTopButton'

export class SearchLayoutAndLogic extends Component {

  constructor(props) {
    super(props)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    this.handleClearSearch = this.handleClearSearch.bind(this)
    this.handleLoadMoreResults = this.handleLoadMoreResults.bind(this)
    this.jumpToTop = this.jumpToTop.bind(this)
  }

  handleSearchSubmit(event) {
    event.preventDefault()
    this.props.deleteError()
    this.props.clearPriorSearch()
    this.props.beginBookAPIRequest()
    let escapedSearchTerms = this.escapeSearchTerms(this.props.userSearchTerms)
    if (escapedSearchTerms === "") {
      this.props.endBookAPIRequest()
      this.props.loadError("Please enter a search term and try again.")
      return
    }

    let searchProperties = {
      searchTerms: escapedSearchTerms,
      serachStartingID: this.props.searchStartingID,
      resultsPerSearch: this.props.resultsPerSearch
    }

    this.props.getBookRecordsBasicSearch(this.searchParameters(searchProperties))
  }

  escapeSearchTerms(searchTerms) {
    return searchTerms.trim()
  }

  searchParameters(searchProperties) {
    return {
        request: new FetchRequest(searchProperties).basicSearch(),
        ModelToReturn: BookRecord
      }
  }

  handleClearSearch(event) {
    event.preventDefault()
    this.props.deleteError()
    this.props.resetSearch()
  }

  handleLoadMoreResults(event) {
    event.preventDefault()
    this.props.beginBookAPIRequest()

    let searchProperties = {
      searchTerms: this.props.userSearchTerms,
      searchStartingID: this.props.searchStartingID + this.props.resultsPerSearch,
      resultsPerSearch: this.props.resultsPerSearch
    }

    this.props.getBookRecordsBasicSearch(this.searchParameters(searchProperties))
    this.props.increaseSearchStartingID()
  }

  jumpToTop(event) {
    event.preventDefault()
    document.getElementById("header").scrollIntoView(true)
  }

  render() {

    return(

      <div>

        <SearchBar
          handleSearchSubmit={this.handleSearchSubmit}
          loadSearchTerms={this.props.loadSearchTerms}
          userSearchTerms={this.props.userSearchTerms}
        />

        <ClearSearchButton
          handleClearSearch={this.handleClearSearch}
        />

        <ErrorDisplay
          errorMessage={this.props.currentError}
        />

        <SearchResultsList
          results={this.props.results}
          resultsNumber={this.props.resultsNumber}
          makingBookAPIRequest={this.props.makingBookAPIRequest}
          handleLoadMoreResults={this.handleLoadMoreResults}
        />

        <JumpToTopButton
          resultsNumber={this.props.resultsNumber}
          jumpToTop={this.jumpToTop}
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
    resultsNumber: state.currentSearch.resultsNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadError: (message) => dispatch(loadError(message)),
    deleteError: () => dispatch(deleteError()),
    beginBookAPIRequest: () => dispatch(beginBookAPIRequest()),
    endBookAPIRequest: () => dispatch(endBookAPIRequest()),
    loadSearchTerms: (searchTerms) => dispatch(loadSearchTerms(searchTerms)),
    increaseSearchStartingID: () => dispatch(increaseSearchStartingID()),
    clearPriorSearch: () => dispatch(clearPriorSearch()),
    resetSearch: () => dispatch(resetSearch()),
    getBookRecordsBasicSearch: (searchParameters) => dispatch(getBookRecordsBasicSearch(searchParameters))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchLayoutAndLogic)
