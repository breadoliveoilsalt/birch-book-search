import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import SearchBar from '../components_presentational/SearchBar'

describe("<SearchLayoutAndLogic />", function() {

  it("should render < SearchBar />", function() {

  })

  it("should render < SearchResults /> when there are search results in the Redux state", function() {
    // Make sure to test when there are results and not results
  })

  it("should render < SearchResultsFooter /> when there are search results in the Redux state", function() {

  })

})
