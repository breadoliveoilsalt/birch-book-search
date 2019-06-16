import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import SearchResultsList from '../components_presentational/searchResultsList'

describe("<SearchResultsList />", function() {
  it("should render a <SearchResult /> for every search result listed in the Redux state", function() {


  })

})
