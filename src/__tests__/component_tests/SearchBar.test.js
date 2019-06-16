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

    it("should add the current query to the Redux state", function(){

    })

    it("should call getBookRecords() from basicBookSearchThunk when clicked with a startingId of 0, the results per query, and the current query search terms from the Redux state", function() {

    })

    it("should remove any errors displayed when clicked", function() {

    })
    // Make sure that hitting enter does not cause clear search to run


  })

  it("should render a Clear Search button", function(){


    describe("the Clear Search button", function(){

      it("should empty the Redux state of the current query and results", function() {

      })

      it("should remove any errors displayed when clicked", function() {

      })

    })
  })


})
