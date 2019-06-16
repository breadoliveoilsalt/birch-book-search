import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import SearchBar from '../components_presentational/SearchBar'

describe("<SearchBar />", function() {
  it("should render an text input field", function() {
    const wrapper = shallow(<SearchBar />)

  })

  it("should render a Search button", function(){

  })

  describe("the Search button", function() {
    it("should call getBookResults() from basicBookSearchThunk when clicked", function() {

    })

  })


})