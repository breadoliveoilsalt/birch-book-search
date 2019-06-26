import React from 'react'
import ReactDOM from 'react-dom'
import { expect } from 'chai'
import sinon from 'sinon'

import { SearchLayoutAndLogic } from '../../components_container/SearchLayoutAndLogic'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

describe("<SearchLayoutAndLogic /> - Testing What Functions Call: ", function() {

  describe("#handleSearchSubmit", function() {

    describe("when SearchLayoutAndLogic#escapeSearchTerms returns a non-empty string", function() {

      // Set up:

      const props = {
        deleteError: sinon.spy(),
        resetSearch: sinon.spy(),
        beginBookAPIRequest: sinon.spy(),
        loadError: sinon.spy(),
        endBookAPIRequest: sinon.spy(),
        loadSearchTerms: sinon.spy(),
        getBookRecordsBasicSearch: sinon.spy()
      }

      const wrapper = shallow(<SearchLayoutAndLogic {...props} />)

      wrapper.instance().getSearchTerms = sinon.stub().returns("  A Good Book  ")
      wrapper.instance().escapeSearchTerms = sinon.stub().returns("A Good Book")

      const event = {
        preventDefault: sinon.spy()
      }

      wrapper.instance().handleSearchSubmit(event)

      // Tests:

      it("calls #preventDefault on the event", function(){
        expect(event.preventDefault.called).to.be.true
      })

      it("calls #this.props.deleteError", function() {
          expect(wrapper.instance().props.deleteError.called).to.be.true
      })

      it("calls #this.props.resetSearch", function() {
          expect(wrapper.instance().props.resetSearch.called).to.be.true
      })

      it("calls #this.props.beginBookAPIRequest", function() {
          expect(wrapper.instance().props.beginBookAPIRequest.called).to.be.true
      })

      it("calls SearchLayoutAndLogic#getSearchTerms and SearchLayoutAndLogic#escapeSearchTerms", function() {
          expect(wrapper.instance().getSearchTerms.called).to.be.true
          expect(wrapper.instance().escapeSearchTerms.called).to.be.true
      })

      it("calls #this.props.loadSearchTerms and #this.props.getBookRecordsBasicSearch, and not #this.props.endBookAPIRequest or #this.props.loadError, if escapeSearchTerms returns a non-empty string", function(){
        expect(wrapper.instance().props.loadSearchTerms.called).to.be.true
        expect(wrapper.instance().props.getBookRecordsBasicSearch.called).to.be.true
        expect(wrapper.instance().props.endBookAPIRequest.called).to.be.false
        expect(wrapper.instance().props.loadError.called).to.be.false
      })

    })

    describe("#escapeSearchTerms returns an empty string", function() {

      const props = {
        deleteError: sinon.spy(),
        resetSearch: sinon.spy(),
        beginBookAPIRequest: sinon.spy(),
        loadError: sinon.spy(),
        endBookAPIRequest: sinon.spy(),
        loadSearchTerms: sinon.spy(),
        getBookRecordsBasicSearch: sinon.spy(),
        increaseSearchStartingID: sinon.spy()
      }

      const wrapper = shallow(<SearchLayoutAndLogic {...props} />)

      wrapper.instance().getSearchTerms = sinon.stub().returns("  ")
      wrapper.instance().escapeSearchTerms = sinon.stub().returns("")

      const event = {
        preventDefault: sinon.spy()
      }

      wrapper.instance().handleSearchSubmit(event)

      // Tests:

      it("calls #preventDefault on the event", function(){
        expect(event.preventDefault.called).to.be.true
      })

      it("calls #this.props.deleteError", function() {
          expect(wrapper.instance().props.deleteError.called).to.be.true
      })

      it("calls #this.props.resetSearch", function() {
          expect(wrapper.instance().props.resetSearch.called).to.be.true
      })

      it("calls #this.props.beginBookAPIRequest", function() {
          expect(wrapper.instance().props.beginBookAPIRequest.called).to.be.true
      })

      it("calls SearchLayoutAndLogic#getSearchTerms and SearchLayoutAndLogic#escapeSearchTerms", function() {
          expect(wrapper.instance().getSearchTerms.called).to.be.true
          expect(wrapper.instance().escapeSearchTerms.called).to.be.true
      })

      it("calls #this.props.endBookAPIRequest and #this.props.loadError, and not #this.props.loadSearchTerms and #this.props.getBookRecordsBasicSearch", function(){

        expect(wrapper.instance().props.endBookAPIRequest.called).to.be.true
        expect(wrapper.instance().props.loadError.called).to.be.true
        expect(wrapper.instance().props.loadSearchTerms.called).to.be.false
        expect(wrapper.instance().props.getBookRecordsBasicSearch.called).to.be.false
      })

    })

  })

  describe("#getSearchTerms", function() {

    it("calls document.getElementById", function(){

      const wrapper = shallow(<SearchLayoutAndLogic />)

      global.window.document.getElementById = sinon.stub().returns({value: "Some Search Terms"})

      wrapper.instance().getSearchTerms()

      expect(global.window.document.getElementById.called).to.be.true

    })

  })

  describe("#escapeSearchTerms", function() {

    it("returns a trimmed up version of the argument passed to it", function(){

      const wrapper = shallow(<SearchLayoutAndLogic />)

      const output = wrapper.instance().escapeSearchTerms("  Wow  ")

      expect(output).to.equal("Wow")

    })

  })

  describe("#handleClearSearch", function() {

    const props = {
      deleteError: sinon.spy(),
      resetSearch: sinon.spy(),
      beginBookAPIRequest: sinon.spy(),
      loadError: sinon.spy(),
      endBookAPIRequest: sinon.spy(),
      loadSearchTerms: sinon.spy(),
      getBookRecordsBasicSearch: sinon.spy()
    }

    const wrapper = shallow(<SearchLayoutAndLogic {...props} />)

    const event = {
      preventDefault: sinon.spy()
    }

    global.window.document.getElementById = sinon.stub().returns({value: "Some Search Terms"})

    wrapper.instance().handleClearSearch(event)

    it("calls #preventDefault on the event", function() {
      expect(event.preventDefault.called).to.be.true
    })

    it("calls this.props.deleteError()", function(){
      expect(props.deleteError.called).to.be.true
    })

    it("calls this.props.resetSearch()", function() {
      expect(props.resetSearch.called).to.be.true
    })

    it("calls document.getElementById", function() {
      expect(global.window.document.getElementById.called).to.be.true
    })

  })

  describe("#handleLoadMoreResults", function() {

    const props = {
      deleteError: sinon.spy(),
      resetSearch: sinon.spy(),
      beginBookAPIRequest: sinon.spy(),
      loadError: sinon.spy(),
      endBookAPIRequest: sinon.spy(),
      loadSearchTerms: sinon.spy(),
      getBookRecordsBasicSearch: sinon.spy(),
      increaseSearchStartingID: sinon.spy()
    }

    const wrapper = shallow(<SearchLayoutAndLogic {...props} />)

    const event = {
      preventDefault: sinon.spy()
    }

    wrapper.instance().handleLoadMoreResults(event)

    it("calls #preventDefault on the event", function() {
      expect(event.preventDefault.called).to.be.true
    })

    it("calls this.props.beginBookAPIRequest()", function(){
      expect(wrapper.instance().props.beginBookAPIRequest.called).to.be.true
    })

    it("calls this.props.getBookRecordsBasicSearch()", function() {
      expect(wrapper.instance().props.getBookRecordsBasicSearch.called).to.be.true
    })

    it("calls this.props.increaseSearchStartingID()", function() {
      expect(wrapper.instance().props.increaseSearchStartingID.called).to.be.true
    })

  })

})
