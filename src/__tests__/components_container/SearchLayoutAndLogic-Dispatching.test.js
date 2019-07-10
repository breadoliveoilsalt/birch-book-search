import React from 'react'
import ReactDOM from 'react-dom'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { expect } from 'chai'

import ConnectedSearchLayoutAndLogic, { SearchLayoutAndLogic } from '../../components_container/SearchLayoutAndLogic'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

import * as actionCreatorsAppStatus from '../../actions/actionCreatorsAppStatus'
import * as actionCreatorsUpdateSearchResults from '../../actions/actionCreatorsUpdateSearchResults'

import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

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

describe("<SearchLayoutAndLogic /> - Testing that the Props Functions Call Dispatch with Action Creators: ", function() {

  describe("When <SearchLayoutAndLogic /> is connected to the Redux store:", function() {

    let wrapper
    let store

    beforeEach(function() {
      store = mockStore(state)
      wrapper = mount(<ConnectedSearchLayoutAndLogic store={store} />)
    })

    afterEach(function() {
      store.clearActions()
    })

    it("#this.props.loadError dispatches the #loadError action creator", function() {
      const message = "Big Error"
      wrapper.find(SearchLayoutAndLogic).instance().props.loadError(message)
      let expectedAction = [actionCreatorsAppStatus.loadError(message)]
      expect(store.getActions()).to.deep.equal(expectedAction)
    })

    it("#this.props.deleteError dispatches the #deleteError action creator", function() {
      wrapper.find(SearchLayoutAndLogic).instance().props.deleteError()
      let expectedAction = [actionCreatorsAppStatus.deleteError()]
      expect(store.getActions()).to.deep.equal(expectedAction)
    })

    it("#this.props.beginBookAPIRequest dispatches the #beginBookAPIRequest action creator", function() {
      wrapper.find(SearchLayoutAndLogic).instance().props.beginBookAPIRequest()
      let expectedAction = [actionCreatorsAppStatus.beginBookAPIRequest()]
      expect(store.getActions()).to.deep.equal(expectedAction)
    })

    it("#this.props.endBookAPIRequest dispatches the #endBookAPIRequest action creator", function() {
      wrapper.find(SearchLayoutAndLogic).instance().props.endBookAPIRequest()
      let expectedAction = [actionCreatorsAppStatus.endBookAPIRequest()]
      expect(store.getActions()).to.deep.equal(expectedAction)
    })

    it("#this.props.loadSearchTerms dispatches the #loadSearchTerms action creator", function() {
      wrapper.find(SearchLayoutAndLogic).instance().props.loadSearchTerms()
      let expectedAction = [actionCreatorsUpdateSearchResults.loadSearchTerms()]
      expect(store.getActions()).to.deep.equal(expectedAction)
    })

    it("#this.props.increaseSearchStartingID dispatches the #increaseSearchStartingID action creator", function() {
      wrapper.find(SearchLayoutAndLogic).instance().props.increaseSearchStartingID()
      let expectedAction = [actionCreatorsUpdateSearchResults.increaseSearchStartingID()]
      expect(store.getActions()).to.deep.equal(expectedAction)
    })

    it("#this.props.resetSearch dispatches the #resetSearch action creator", function() {
      wrapper.find(SearchLayoutAndLogic).instance().props.resetSearch()
      let expectedAction = [actionCreatorsUpdateSearchResults.resetSearch()]
      expect(store.getActions()).to.deep.equal(expectedAction)
    })

    it("#this.props.clearPriorSearch dispatches the #clearPriorSearch action creator", function() {
      wrapper.find(SearchLayoutAndLogic).instance().props.clearPriorSearch()
      let expectedAction = [actionCreatorsUpdateSearchResults.clearPriorSearch()]
      expect(store.getActions()).to.deep.equal(expectedAction)
    })
  })
})
