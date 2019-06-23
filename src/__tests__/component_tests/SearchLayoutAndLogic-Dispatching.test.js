import React from 'react'
import ReactDOM from 'react-dom'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { expect } from 'chai'
import { Provider } from 'react-redux'
import configureStore from '../../configureStore'

import sinon from 'sinon'

import ConnectedSearchLayoutAndLogic, { SearchLayoutAndLogic } from '../../components_container/SearchLayoutAndLogic'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

// import { getBookRecords } from '../../birch_modules/fetchRequestBasicSearch'
import * as actionCreatorsAppStatus from '../../birch_modules/actionCreatorsAppStatus'
import * as actionCreatorsUpdateSearchResults from '../../birch_modules/actionCreatorsUpdateSearchResults'
import { getBookRecordsBasicSearch } from '../../birch_modules/getBookRecordsThunk'

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

      let store = mockStore(state)

      const wrapper = mount(<ConnectedSearchLayoutAndLogic store={store} />)

      const message = "Big Error"

      wrapper.find(SearchLayoutAndLogic).instance().props.loadError(message)

      let expectedAction = [actionCreatorsAppStatus.loadError(message)]

      expect(store.getActions()).to.deep.equal(expectedAction)

    })

    it("#this.props.deleteError dispatches the #deleteError action creator", function() {

      let store = mockStore(state)

      const wrapper = mount(<ConnectedSearchLayoutAndLogic store={store} />)

      const message = "Big Error"

      wrapper.find(SearchLayoutAndLogic).instance().props.deleteError()

      let expectedAction = [actionCreatorsAppStatus.deleteError()]

      expect(store.getActions()).to.deep.equal(expectedAction)

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

    // { loadSearchTerms, increaseSearchStartingID, resetSearch }

  })

})

//{ loadError, deleteError, beginBookAPIRequest, endBookAPIRequest }

// describe("<SearchLayoutAndLogic /> - Testing What Functions Call: ", function() {
//
//   describe("#handleSearchSubmit", function() {
//
//     describe("when SearchLayoutAndLogic#escapeSearchTerms returns a non-empty string", function() {
//
//       // Set up:
//
//       const props = {
//         deleteError: sinon.spy(),
//         resetSearch: sinon.spy(),
//         beginBookAPIRequest: sinon.spy(),
//         loadError: sinon.spy(),
//         endBookAPIRequest: sinon.spy(),
//         loadSearchTerms: sinon.spy(),
//         getBookRecordsBasicSearch: sinon.spy()
//       }
//
//       const wrapper = shallow(<SearchLayoutAndLogic {...props} />)
//
//       wrapper.instance().getSearchTerms = sinon.stub().returns("  A Good Book  ")
//       wrapper.instance().escapeSearchTerms = sinon.stub().returns("A Good Book")
//
//       const event = {
//         preventDefault: sinon.spy()
//       }
//
//       wrapper.instance().handleSearchSubmit(event)
//
//       // Tests:
//
//       it("calls #preventDefault on the event", function(){
//         expect(event.preventDefault.called).to.be.true
//       })
//
//       it("calls #this.props.deleteError", function() {
//           expect(wrapper.instance().props.deleteError.called).to.be.true
//       })
//
//       it("calls #this.props.resetSearch", function() {
//           expect(wrapper.instance().props.resetSearch.called).to.be.true
//       })
//
//       it("calls #this.props.beginBookAPIRequest", function() {
//           expect(wrapper.instance().props.beginBookAPIRequest.called).to.be.true
//       })
//
//       it("calls SearchLayoutAndLogic#getSearchTerms and SearchLayoutAndLogic#escapeSearchTerms", function() {
//           expect(wrapper.instance().getSearchTerms.called).to.be.true
//           expect(wrapper.instance().escapeSearchTerms.called).to.be.true
//       })
//
//       it("calls #this.props.loadSearchTerms and #this.props.getBookRecordsBasicSearch, and not #this.props.endBookAPIRequest or #this.props.loadError, if escapeSearchTerms returns a non-empty string", function(){
//         expect(wrapper.instance().props.loadSearchTerms.called).to.be.true
//         expect(wrapper.instance().props.getBookRecordsBasicSearch.called).to.be.true
//         expect(wrapper.instance().props.endBookAPIRequest.called).to.be.false
//         expect(wrapper.instance().props.loadError.called).to.be.false
//       })
//
//     })
//
//     describe("#escapeSearchTerms returns an empty string", function() {
//
//       // Set up:
//
//       const props = {
//         deleteError: sinon.spy(),
//         resetSearch: sinon.spy(),
//         beginBookAPIRequest: sinon.spy(),
//         loadError: sinon.spy(),
//         endBookAPIRequest: sinon.spy(),
//         loadSearchTerms: sinon.spy(),
//         getBookRecordsBasicSearch: sinon.spy(),
//         increaseSearchStartingID: sinon.spy()
//       }
//
//       const wrapper = shallow(<SearchLayoutAndLogic {...props} />)
//
//       wrapper.instance().getSearchTerms = sinon.stub().returns("  ")
//       wrapper.instance().escapeSearchTerms = sinon.stub().returns("")
//
//       const event = {
//         preventDefault: sinon.spy()
//       }
//
//       wrapper.instance().handleSearchSubmit(event)
//
//       // Tests:
//
//       it("calls #preventDefault on the event", function(){
//         expect(event.preventDefault.called).to.be.true
//       })
//
//       it("calls #this.props.deleteError", function() {
//           expect(wrapper.instance().props.deleteError.called).to.be.true
//       })
//
//       it("calls #this.props.resetSearch", function() {
//           expect(wrapper.instance().props.resetSearch.called).to.be.true
//       })
//
//       it("calls #this.props.beginBookAPIRequest", function() {
//           expect(wrapper.instance().props.beginBookAPIRequest.called).to.be.true
//       })
//
//       it("calls SearchLayoutAndLogic#getSearchTerms and SearchLayoutAndLogic#escapeSearchTerms", function() {
//           expect(wrapper.instance().getSearchTerms.called).to.be.true
//           expect(wrapper.instance().escapeSearchTerms.called).to.be.true
//       })
//
//       it("calls #this.props.endBookAPIRequest and #this.props.loadError, and not #this.props.loadSearchTerms and #this.props.getBookRecordsBasicSearch", function(){
//
//         expect(wrapper.instance().props.endBookAPIRequest.called).to.be.true
//         expect(wrapper.instance().props.loadError.called).to.be.true
//         expect(wrapper.instance().props.loadSearchTerms.called).to.be.false
//         expect(wrapper.instance().props.getBookRecordsBasicSearch.called).to.be.false
//       })
//
//     })
//
//   })
//
//   describe("#getSearchTerms", function() {
//
//     it("calls document.getElementById(#search-input).value", function(){
//
//
//       // INCOMPLETE TEST
//       const wrapper = shallow(<SearchLayoutAndLogic />)
//       // document.getElementById("search-input") = sinon.stub()
//       global.window.document.getElementById = sinon.stub().returns({value: "Some Search Terms"})
//
//       wrapper.instance().getSearchTerms()
//
//       expect(global.window.document.getElementById.called).to.be.true
//
//
//       // let searchInputBox = wrapper.find("#search-input")
//       // console.log(searchInputBox.props())
//     })
//
//
//   })
//
//   describe("#escapeSearchTerms", function() {
//
//     it("returns a trimmed up version of the argument passed to it", function(){
//
//       const wrapper = shallow(<SearchLayoutAndLogic />)
//
//       const output = wrapper.instance().escapeSearchTerms("  Wow  ")
//
//       expect(output).to.equal("Wow")
//
//     })
//
//   })
//
//   describe("#handleClearSearch", function() {
//
//     const props = {
//       deleteError: sinon.spy(),
//       resetSearch: sinon.spy(),
//       beginBookAPIRequest: sinon.spy(),
//       loadError: sinon.spy(),
//       endBookAPIRequest: sinon.spy(),
//       loadSearchTerms: sinon.spy(),
//       getBookRecordsBasicSearch: sinon.spy()
//     }
//
//     const wrapper = shallow(<SearchLayoutAndLogic {...props} />)
//
//     const event = {
//       preventDefault: sinon.spy()
//     }
//
//     wrapper.instance().handleClearSearch(event)
//
//     it("calls #preventDefault on the event", function() {
//       expect(event.preventDefault.called).to.be.true
//     })
//
//     it("calls this.props.deleteError()", function(){
//       expect(deleteError.called).to.be.true
//     })
//
//     it("calls this.props.resetSearch()", function() {
//       expect(resetSearch.called).to.be.true
//     })
//
//
//     /// INCOMPLETE TEST - HAVE TO TEST THAT THIS IS CALLED:     document.getElementById("search-input").value = ""
//
//   })
//
//   describe("#handleLoadMoreResults", function() {
//
//     const props = {
//       deleteError: sinon.spy(),
//       resetSearch: sinon.spy(),
//       beginBookAPIRequest: sinon.spy(),
//       loadError: sinon.spy(),
//       endBookAPIRequest: sinon.spy(),
//       loadSearchTerms: sinon.spy(),
//       getBookRecordsBasicSearch: sinon.spy(),
//       increaseSearchStartingID: sinon.spy()
//     }
//
//     const wrapper = shallow(<SearchLayoutAndLogic {...props} />)
//
//     const event = {
//       preventDefault: sinon.spy()
//     }
//
//     wrapper.instance().handleLoadMoreResults(event)
//
//     it("calls #preventDefault on the event", function() {
//       expect(event.preventDefault.called).to.be.true
//     })
//
//     it("calls this.props.beginBookAPIRequest()", function(){
//       expect(wrapper.instance().props.beginBookAPIRequest.called).to.be.true
//     })
//
//     it("calls this.props.getBookRecordsBasicSearch()", function() {
//       expect(wrapper.instance().props.getBookRecordsBasicSearch.called).to.be.true
//       /// INCOMPLETE TESTS - HOW DO I SEE THAT THE ARGUMENT IS INCREASED??
//     })
//
//     it("calls this.props.increaseSearchStartingID()", function() {
//       expect(wrapper.instance().props.increaseSearchStartingID.called).to.be.true
//     })
//
//   })
//
//   describe("#jumpToTopOfResults()", function() {
//
//     const wrapper = shallow(<SearchLayoutAndLogic />)
//
//     const event = {
//       preventDefault: sinon.spy()
//     }
//
//     wrapper.instance().jumpToTopOfResults(event)
//
//     it("calls #preventDefault on the event", function() {
//       expect(event.preventDefault.called).to.be.true
//     })
//     /// INCOMPLETE TEST - SEE ERRORS RENDERED IN CONSOLE.
//   })
//
// })
//
//
//
//
// // SAVE FOR LATER FOR WHEN I NEED TO CONNECT TO THE STORE, BUT MOVE ON.
//   // it("returns the value of the document element with id 'search-input'", function() {
//   //
//   //   let store = configureStore()
//   //
//   //   const wrapper = mount(<ConnectedSearchLayoutAndLogic store={store} />)
//   //
//   //   // document.getElementById("#search-input").value = "Yippie"
//   //
//   //   let searchInputBox = wrapper.find("#search-input")
//   //   searchInputBox.value = "Yo"
//   //
//   //   console.log(searchInputBox)
//   //
//   //   console.log(wrapper.props())
//   //   // console.log(val.value)
//   //   expect(searchInputBox).to.exist
//   //   // global.window.document.getElementById = sinon.stub()
//   //
//   //
//   //
//   // })
//
// // getSearchTerms() {
// //   return document.getElementById("search-input").value
// // }
