import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import Header from '../../components_presentational/Header'

let wrapper

beforeEach(function(){
  wrapper = shallow(<Header />)
})

describe("<Header />", function() {

  it("renders a div with an id equal to 'header'", function() {
    expect(wrapper.find("div#header")).to.have.lengthOf(1)
  })

  it("renders the text 'Birch'", function() {
    expect(wrapper.text()).to.equal("Birch")
  })

})
