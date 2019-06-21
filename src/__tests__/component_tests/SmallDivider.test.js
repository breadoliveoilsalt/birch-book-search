import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import SmallDivider from '../../components_presentational/SmallDivider'

describe("<SmallDivider />", function() {

  it("should have a class name 'small-divider'", function() {
    const wrapper = shallow(<SmallDivider />)
    expect(wrapper.hasClass("small-divider")).to.be.true
  })

  it("should have no text", function() {
      const wrapper = shallow(<SmallDivider />)
      expect(wrapper.text()).to.equal("")
  })

})
