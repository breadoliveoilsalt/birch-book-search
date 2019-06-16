import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import SearchResultsFooter from '../components_container/SearchResultsFooter'

describe("<SearchResultsFooter />", function() {
  it("should not display anything when the Redux state for current search results is empty and an API request is not being made", function() {

  })

  it("should display only a loading indicator when an API request is being made, whether or not there are current search results in the Redux state", function() {
    // test for nothing else there
  })

  it("should render a Load More Results button if there are current search results in the Redux state and an API request is not being made", function() {

    // test that rendered
    describe("Load More Results Button", function() {

      it("should increase the startingId in the Redux state by 20", function() {

      })

      it("should call getBookRecords() from basicBookSearchThunk when clicked with the increased startingId, the results per query, and the current query search terms from the Redux state", function() {

      })

    })
  })

  it("should display a 'Return to the Top' link to the top of <SearchResultsList /> if there are book records in the Redux state", function() {

    describe("The 'Return to the Top' link", function() {
      it("should return to the top of <SearchResultsList /> when clicked", function() {
        
      })

    })

  })



})
