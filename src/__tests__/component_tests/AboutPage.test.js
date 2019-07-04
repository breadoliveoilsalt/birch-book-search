import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import AboutPage from '../../components_presentational/AboutPage'

let wrapper

beforeEach(function() {
  wrapper = shallow(<AboutPage />)
})

describe("<AboutPage />", function() {

  it("should render text", function() {
    expect(wrapper.text()).to.not.be.null
  })

  it("should have a class name 'info-page'", function() {
    expect(wrapper.hasClass("info-page")).to.be.true
  })
})
