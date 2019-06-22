import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import { Provider } from 'react-redux'
// import configureStore from '../../configureStore'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() })

import { SearchLayoutAndLogic } from '../../components_container/SearchLayoutAndLogic'
import SearchBar from '../../components_presentational/SearchBar'
import ClearSearchButton from '../../components_presentational/ClearSearchButton'
import ErrorDisplay from '../../components_presentational/ErrorDisplay'
import SearchResultsList from '../../components_presentational/SearchResultsList'
// will have to import other components needed here for the tests to pass?

describe("<SearchLayoutAndLogic />", function() {

  it("should render the SearchBar, ClearSearchButton, ErrorDisplay, and SearchResultsList Components", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)

    expect(wrapper.find(SearchBar)).to.exist
    expect(wrapper.find(ClearSearchButton)).to.exist
    expect(wrapper.find(ErrorDisplay)).to.exist
    expect(wrapper.find(SearchResultsList)).to.exist

    // console.log(wrapper.find(ClearSearchButton).props().clearSearch)
    // expect(wrapper.find(ClearSearchButton).props().clearSearch).to.equal(wrapper.instance().handleClearSearch)
  })

  it("should have a function #handleClearSearch that is passed to the ClearSearchButton component as a prop", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)
    expect(wrapper.find(ClearSearchButton).props().clearSearch).to.equal(wrapper.instance().handleClearSearch)
  })

  it("should have a function #handleSearchSubmit that is passed to the SearchBar component as a prop", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)
    expect(wrapper.find(SearchBar).props().handleSearchSubmit).to.equal(wrapper.instance().handleSearchSubmit)
  })

  it("should have a function #handleLoadMoreResults that is passed to SearchResultsList component as a prop", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)
    expect(wrapper.find(SearchResultsList).props().handleLoadMoreResults).to.equal(wrapper.instance().handleLoadMoreResults)
  })

  it("should have a function #jumpToTopOfResults that is passed to the SearchResultsList component as a prop", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)
    expect(wrapper.find(SearchResultsList).props().jumpToTopOfResults).to.equal(wrapper.instance().jumpToTopOfResults)
  })

  it("should have a function #escapeSearchTerms that trims white space from a string argument", function(){
      const wrapper = shallow(<SearchLayoutAndLogic />)
      expect(wrapper.instance().escapeSearchTerms("  Something  ")).to.equal("Something")
  })

  it("should have a function #handleSearchSubmit that gets user input from the search endBookAPIRequest", function(){


      let store = mockStore({})
      // const wrapper = shallow(<SearchLayoutAndLogic />).dive()

      const wrapper = shallow(<SearchLayoutAndLogic store={store} />)
      let eventStub = new Event("submit")
      wrapper.instance().handleSearchSubmit(eventStub)


    //   Getting:
    //
    //   TypeError: this.props.deleteError is not a function
    //
    //   23 |   handleSearchSubmit(event) {
    //   24 |     event.preventDefault()
    // > 25 |     this.props.deleteError()
    //      |                ^
    //   26 |     this.props.resetSearch()
    //   27 |     this.props.beginBookAPIRequest()
    //   28 |     let searchTerms = document.getElementById("search-input").value

      // let store = mockStore({})

      // let spy = sinon.spy(wrapper.instance().handleSearchSubmit(eventStub))

      // let spy = sinon.spy(wrapper.instance().handleSearchSubmit(eventStub))


      // expect(wrapper.find("#search-input")).to.exist
      // console.log(wrapper.find("#search-input").render())
      // // console.log(wrapper.html())
      // .value = "termy"
      // console.log(wrapper.find("#search-input").text())
      // expect(wrapper.instance().escapeSearchTerms("  Something  ")).to.equal("Something")
  })



})

  //
  //
  // it("should render < SearchBar />", function() {
  //
  // })
  //
  // it("should render < SearchResultsList /> when there are search results in the Redux state", function() {
  //   // Make sure to test when there are results and not results
  // })
  //
  // it("should render < SearchResultsFooter /> when there are search results in the Redux state", function() {
  //
  // })
