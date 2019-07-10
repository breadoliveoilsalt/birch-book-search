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

  it("should render two Link components from react-router-dom with the className 'navlink'", function() {
    expect(wrapper.find(Link)).to.have.lengthOf(2)
    expect(wrapper.find(Link).get(0).props.className).to.equal("navlink")
    expect(wrapper.find(Link).get(1).props.className).to.equal("navlink")
  })

  it("should render one Link with a path to the home page that includes the text 'Book Search'", function(){
    expect(wrapper.find({to: "/"})).to.have.lengthOf(1)
    let textArray = wrapper.find({to: "/"}).get(0).props.children
    expect(textArray).to.include("Book ")
    expect(textArray).to.include(" Search")
  })

  it("should render a Link with a path to the about page that includes the text 'About'", function(){
    expect(wrapper.find({to: "/about"})).to.have.lengthOf(1)
    let textArray = wrapper.find({to: "/about"}).get(0).props.children
    expect(textArray).to.include("About")
  })

})
