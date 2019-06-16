import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import ErrorDisplay from '../components_container/ErrorDisplay'


describe("<ErrorDisplay />", function() {
  it("should not render when the Redux state has a value of null under currentError", function(){

  })

  it("should render with the appropriate text when there is a currentError in the Redux State", function(){

  })
  
})
