import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import SearchResultsList from '../../components_presentational/SearchResultsList'
import SearchResultsHeader from '../../components_presentational/SearchResultsHeader'
import BookRecord from '../../components_presentational/BookRecord'
import SearchResultsFooter from '../../components_presentational/SearchResultsFooter'

describe("<SearchResultsList />", function() {

  let wrapper

  let props = {
    results: [],
    resultsNumber: 10,
    makingBookAPIRequest: false,
    handleLoadMoreResults: "Function 1",
    jumpToTopOfResults: "Function 2"
  }

  beforeEach(function() {
    wrapper = shallow(<SearchResultsList {...props} />)
  })

  it("should render a div with the className 'search-results-container'", function() {
    expect(wrapper.find("div.search-results-container")).to.have.lengthOf(1)
  })

  it("should render <SearchResultsHeader /> and pass it props.resultsNumber", function(){
    expect(wrapper.find(SearchResultsHeader)).to.have.lengthOf(1)
    expect(wrapper.find(SearchResultsHeader).props().resultsNumber).to.equal(props.resultsNumber)
  })

  it("should render <SearchResultsFooter /> and pass it props.makingBookAPIRequest, props.resultsNumber, and props.handleLoadMoreResults", function() {
    expect(wrapper.find(SearchResultsFooter)).to.have.lengthOf(1)
    expect(wrapper.find(SearchResultsFooter).props().makingBookAPIRequest).to.equal(props.makingBookAPIRequest)
    expect(wrapper.find(SearchResultsFooter).props().resultsNumber).to.equal(props.resultsNumber)
    expect(wrapper.find(SearchResultsFooter).props().handleLoadMoreResults).to.equal(props.handleLoadMoreResults)
  })

  it("should pass a new prop to <SearchResultsFooter />, resultsDisplayed, equal to the length of props.results", function() {
    expect(wrapper.find(SearchResultsFooter).props().resultsDisplayed).to.equal(props.results.length)
  })

  it("should not render any <BookRecord />s if props.results is an empty array", function() {
    expect(wrapper.find(BookRecord).isEmptyRender()).to.be.true
  })

  it("should render a <BookRecord /> for every result if props.results is not an empty array", function() {

    const mockResults = [{
      imageURL: "http://books.google.com/books/content?id=2o_mEBpjucUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      title: "Jimmy the Squirrel",
      authors: "Amr Taher",
      publisher: "AuthorHouse",
      additionalInfoURL: "http://books.google.com/books?id=2o_mEBpjucUC&dq=jimmy&hl=&source=gbs_api"
    },
    {
      imageURL: "http://books.google.com/books/content?id=OsbuBD3mkkkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      title: "Jimmy Page",
      authors: "George Case",
      publisher: "Hal Leonard Corporation",
      additionalInfoURL: "http://books.google.com/books?id=OsbuBD3mkkkC&dq=jimmy&hl=&source=gbs_api"
    }]

    wrapper = shallow(<SearchResultsList results={mockResults}/>)
    expect(wrapper.find(BookRecord)).to.have.lengthOf(2)
  })

})
