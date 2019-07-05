import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import BigDivider from '../../components_presentational/BigDivider'

let wrapper

beforeEach(function() {
  wrapper = shallow(<BigDivider />)
})

describe("<BigDivider />", function() {

  it("should render one div", function() {
    expect(wrapper.find("div")).to.have.lengthOf(1)
  })

  it("should have a class name 'big-divider'", function() {
    expect(wrapper.hasClass("big-divider")).to.be.true
  })

  it("should have no text", function() {
    expect(wrapper.text()).to.equal("")
  })

})
