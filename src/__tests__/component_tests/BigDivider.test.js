import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import BigDivider from '../../components_presentational/BigDivider'

describe("<BigDivider />", function() {

  it("should have a class name 'big-divider'", function() {
    const wrapper = shallow(<BigDivider />)
    expect(wrapper.hasClass("big-divider")).to.be.true
  })

  it("should have no text", function() {
      const wrapper = shallow(<BigDivider />)
      expect(wrapper.text()).to.equal("")
  })

})
