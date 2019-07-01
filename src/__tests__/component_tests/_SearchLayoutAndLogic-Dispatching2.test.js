import React from 'react'
import ReactDOM from 'react-dom'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { expect } from 'chai'

import { Provider } from 'react-redux'

// You really do need both of these if you are to .find SearchLayoutAndLogic through a mount
import ConnectedSearchLayoutAndLogic, { SearchLayoutAndLogic } from '../../components_container/SearchLayoutAndLogic'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

import * as actionCreatorsAppStatus from '../../birch_modules/actionCreatorsAppStatus'
import * as actionCreatorsUpdateSearchResults from '../../birch_modules/actionCreatorsUpdateSearchResults'

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

    it("#this.props.loadError dispatches the #loadError action creator", function() {

      // note this is using shallow to render a Redux-connected store...but I have a mock store here, so purpose is to test what is called.
      let store = mockStore(state)


      // This throws errors about needing props when rendering lower components
      // const wrapper = mount(<Provider store={store}> <SearchLayoutAndLogic /> </Provider>)

      console.log(wrapper.debug())
      // works:
      // const wrapper = shallow(<ConnectedSearchLayoutAndLogic store={store} />)
      // expect(wrapper.find(SearchLayoutAndLogic).exists()).to.be.true

    })

    it("#this.props.deleteError dispatches the #deleteError action creator", function() {

      let store = mockStore(state)

      // const wrapper = mount(<ConnectedSearchLayoutAndLogic store={store} />)

      const wrapper = shallow(<ConnectedSearchLayoutAndLogic store={store}/>)

      // console.log(wrapper.find(SearchLayoutAndLogic).props().loadError)
      // const message = "Big Error"
      //
      // wrapper.find(SearchLayoutAndLogic).instance().props.deleteError()
      //
      // let expectedAction = [actionCreatorsAppStatus.deleteError()]
      //
      // expect(store.getActions()).to.deep.equal(expectedAction)

    })

    it("#this.props.beginBookAPIRequest dispatches the #beginBookAPIRequest action creator", function() {

      let store = mockStore(state)

      const wrapper = mount(<ConnectedSearchLayoutAndLogic store={store} />)

      const message = "Big Error"

      wrapper.find(SearchLayoutAndLogic).instance().props.beginBookAPIRequest()

      let expectedAction = [actionCreatorsAppStatus.beginBookAPIRequest()]

      expect(store.getActions()).to.deep.equal(expectedAction)

    })

    it("#this.props.endBookAPIRequest dispatches the #endBookAPIRequest action creator", function() {

      let store = mockStore(state)

      const wrapper = mount(<ConnectedSearchLayoutAndLogic store={store} />)

      const message = "Big Error"

      wrapper.find(SearchLayoutAndLogic).instance().props.endBookAPIRequest()

      let expectedAction = [actionCreatorsAppStatus.endBookAPIRequest()]

      expect(store.getActions()).to.deep.equal(expectedAction)

    })

    it("#this.props.loadSearchTerms dispatches the #loadSearchTerms action creator", function() {

      let store = mockStore(state)

      const wrapper = mount(<ConnectedSearchLayoutAndLogic store={store} />)

      const message = "Big Error"

      wrapper.find(SearchLayoutAndLogic).instance().props.loadSearchTerms()

      let expectedAction = [actionCreatorsUpdateSearchResults.loadSearchTerms()]

      expect(store.getActions()).to.deep.equal(expectedAction)

    })

    it("#this.props.increaseSearchStartingID dispatches the #increaseSearchStartingID action creator", function() {

      let store = mockStore(state)

      const wrapper = mount(<ConnectedSearchLayoutAndLogic store={store} />)

      const message = "Big Error"

      wrapper.find(SearchLayoutAndLogic).instance().props.increaseSearchStartingID()

      let expectedAction = [actionCreatorsUpdateSearchResults.increaseSearchStartingID()]

      expect(store.getActions()).to.deep.equal(expectedAction)

    })

    it("#this.props.resetSearch dispatches the #resetSearch action creator", function() {

      let store = mockStore(state)

      const wrapper = mount(<ConnectedSearchLayoutAndLogic store={store} />)

      const message = "Big Error"

      wrapper.find(SearchLayoutAndLogic).instance().props.resetSearch()

      let expectedAction = [actionCreatorsUpdateSearchResults.resetSearch()]

      expect(store.getActions()).to.deep.equal(expectedAction)

    })

  })

})
