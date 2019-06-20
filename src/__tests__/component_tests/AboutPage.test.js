import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import AboutPage from '../../components_presentational/AboutPage'

describe("<AboutPage />", function() {

  it("should render text", function() {
      const wrapper = shallow(<AboutPage />)
      expect(wrapper.text()).to.not.be.null
  })

  it("should have a class name 'about-page'", function() {
    const wrapper = shallow(<AboutPage />)
    expect(wrapper.hasClass("about-page")).to.be.true
  })
})
