import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import NavBar from '../components_presentational/NavBar'

describe("<NavBar />", function() {
  it("should have two links", function() {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.text()).to.equal("Birch")
  })

  it("should have a link to Search page that loads search page when clicked", function(){

  })

  it("should have a link to About page that loads the about page when clicked", function(){
    
  })

})
