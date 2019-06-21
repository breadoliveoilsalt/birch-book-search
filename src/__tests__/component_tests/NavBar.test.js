import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Link } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

import NavBar from '../../components_presentational/NavBar'

describe("<NavBar />", function() {

  it("should render two Link components from react-router-dom", function() {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find(Link)).to.have.lengthOf(2)
  })

  it("should render a Link with a path to the home page", function(){
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find({to: "/"})).to.exist
  })

  it("should render a Link with a path to the about page", function(){
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find({to: "/about"})).to.exist
  })

})
