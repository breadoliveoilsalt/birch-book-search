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

  describe("<SearchBar />'s text input", function(){

    it("has a 'id' attribute equal to 'search-input'", function() {

        const wrapper = shallow(<SearchBar />)

        expect(wrapper.find("form input[type='text']").props().id).to.equal("search-input")
    })

    it("has a 'value' attribute equal to props.userSearchTerms", function() {
        let testSearchTerms = "A Good Book"
        const wrapper = shallow(<SearchBar userSearchTerms={testSearchTerms}/>)

        expect(wrapper.find("form input[type='text']").props().value).to.equal(testSearchTerms)
    })

    it("calls the function passed via props.loadSearchTerms when there is a change to the text box", function(){

      const loadSearchTermsSpy = sinon.spy()
      const wrapper = shallow(<SearchBar loadSearchTerms={loadSearchTermsSpy}/>)
      const event = {target: {value: "A Good Book"}}

      wrapper.find("form input[type='text']").simulate("change", event)
      expect(loadSearchTermsSpy.calledOnce).to.be.true
    })
  })

  describe("<SearchBar />'s submit input", function(){

    it("has a 'value' attribute equal to 'Search'", function() {

      const wrapper = shallow(<SearchBar/>)

      expect(wrapper.find("form input[type='submit']").props().value).to.equal("Search")
    })

    it("calls the function passed via props.handleSearchSubmit when the submit button is clicked", function(){

      const handleSearchSubmitSpy = sinon.spy()
      const wrapper = shallow(<SearchBar handleSearchSubmit={handleSearchSubmitSpy}/>)

      wrapper.find("form input[type='submit']").simulate("click")

      expect(handleSearchSubmitSpy.calledOnce).to.be.true
    })
  })
})
