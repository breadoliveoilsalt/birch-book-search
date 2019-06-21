import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import { Provider } from 'react-redux'
// import configureStore from '../../configureStore'

import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() })

import { SearchLayoutAndLogic } from '../../components_container/SearchLayoutAndLogic'
// will have to import other components needed here for the tests to pass?

describe("<SearchLayoutAndLogic />", function() {

  it("should render", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)
    console.log(wrapper.debug())
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
