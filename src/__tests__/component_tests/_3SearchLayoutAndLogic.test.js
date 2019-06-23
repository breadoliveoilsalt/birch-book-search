// Hugely helpful: https://circleci.com/blog/continuously-testing-react-applications-with-jest-and-enzyme/

import React from 'react'
import ReactDOM from 'react-dom'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { expect } from 'chai'
import { Provider } from 'react-redux'

import sinon from 'sinon'

import ConnectedSearchLayoutAndLogic, { SearchLayoutAndLogic } from '../../components_container/SearchLayoutAndLogic'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

// import { getBookRecords } from '../../birch_modules/fetchRequestBasicSearch'
import { loadError, deleteError, beginBookAPIRequest, endBookAPIRequest } from '../../birch_modules/actionCreatorsAppStatus'
import { loadSearchTerms, increaseSearchStartingID, loadSearchResults, loadResultNumber, resetSearch } from '../../birch_modules/actionCreatorsUpdateSearchResults'

import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import configureStore from '../../configureStore'

const state = {
      appStatus: {
        makingBookAPIRequest: false,
        currentError: null
      },
      currentSearch:
       { userSearchTerms: null,
         resultsPerSearch: 20,
         searchStartingID: 0,
         results: [],
         resultNumber: 0
       }
     }


describe("SearchLayoutAndLogic#handleSearchSubmit", function() {

  // Set up:

  const props = {
    deleteError: sinon.spy(),
    resetSearch: sinon.spy(),
    beginBookAPIRequest: sinon.spy(),
    endBookAPIRequest: sinon.spy(),
    loadSearchTerms: sinon.spy(),
    getBookRecordsBasicSearch: sinon.spy()
  }

  const wrapper = shallow(<SearchLayoutAndLogic {...props} />)

  const event = {
    preventDefault: sinon.spy()
  }

  wrapper.instance().getSearchTerms = sinon.stub()
  wrapper.instance().getSearchTerms.returns("  A Good Book  ")

  wrapper.instance().escapeSearchTerms = sinon.stub()
  wrapper.instance().escapeSearchTerms.returns("A Good Book")

  wrapper.instance().handleSearchSubmit(event)

  // Test:

  it("calls #this.props.deleteError", function() {
      expect(wrapper.instance().props.deleteError.calledOnce).to.be.true
  })

  it("calls #this.props.resetSearch", function() {
      expect(wrapper.instance().props.resetSearch.calledOnce).to.be.true
  })

  it("calls #this.props.beginBookAPIRequest", function() {
      expect(wrapper.instance().props.beginBookAPIRequest.calledOnce).to.be.true
  })



})
