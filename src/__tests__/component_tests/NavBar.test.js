import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Link } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

import NavBar from '../../components_presentational/NavBar'

let wrapper

beforeEach(function(){
  wrapper = shallow(<NavBar />)
})

describe("<NavBar />", function() {

  it("should render a div with the className 'navbar'", function(){
    expect(wrapper.find("div").hasClass("navbar")).to.be.true
  })

  it("should render two Link components from react-router-dom", function() {
    expect(wrapper.find(Link)).to.have.lengthOf(2)
  })

  it("should render one Link with a path to the home page", function(){
    // const wrapper = shallow(<NavBar />)
    console.log(wrapper.find({to: "/"}).text())
    expect(wrapper.find({to: "/"})).to.exist
  })

  it("should render a Link with a path to the about page", function(){
    // const wrapper = shallow(<NavBar />)
    expect(wrapper.find({to: "/about"})).to.exist
  })

})
