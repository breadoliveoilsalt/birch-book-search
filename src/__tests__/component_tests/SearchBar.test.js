import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() })

import SearchBar from '../../components_presentational/SearchBar'

describe("<SearchBar />", function() {

  it("renders a text input field and submit button within a form", function(){

    const wrapper = shallow(<SearchBar />)

    expect(wrapper.exists("form input[type='text']")).to.be.true
    expect(wrapper.exists("form input[type='submit']")).to.be.true

  })

  it("clicking the button submits the form that calls the function passed via props", function(){

      const searchSpy = sinon.spy()
      const wrapper = shallow(<SearchBar handleSearchSubmit={searchSpy}/>)

      wrapper.find("form").simulate("submit")

      expect(searchSpy.calledOnce).to.be.true

  })

})
