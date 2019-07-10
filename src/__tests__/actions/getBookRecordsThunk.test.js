import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { expect } from 'chai'
import sinon from 'sinon'

import { getBookRecords } from '../../actions/getBookRecordsThunk'

import { loadError, beginBookAPIRequest, endBookAPIRequest } from '../../actions/actionCreatorsAppStatus'
import { loadSearchTerms, loadSearchResults, loadResultsNumber } from '../../actions/actionCreatorsUpdateSearchResults'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockLoadResults = [{title: "A Good Book"}, {title: "Another Good Book"}]

describe('#getBookBasicSearch', function() {

  it("calling dispatch on #getBooksBasicSearch calls the apiRequest function passed to it", function(){

    let store = mockStore({})

        // Below, used Promise.resolve() to deal with fact that request() is followed by a .then
    let apiRequestMock = sinon.mock().returns(Promise.resolve())

    return store.dispatch(getBookRecords(apiRequestMock)).then(
      expect(apiRequestMock.calledOnce).to.be.true
    )

  })

  it("if there is no data.error property in the response, and there are data.resultsNumber and data.results properties, it dispatches #endBookAPIRequest, #loadResultsNumber, and #loadSearchResults", function() {

      let store = mockStore({})

      let mockData = {status: 200, resultsNumber: 2, results: mockLoadResults}

      let apiRequestMock = sinon.mock().returns(Promise.resolve(mockData))

      let starterDispatch = async function() {
        await store.dispatch(getBookRecords(apiRequestMock))
      }

      let expectedActions = [
        endBookAPIRequest(),
        loadResultsNumber(mockData.resultsNumber),
        loadSearchResults(mockLoadResults)
      ]

      return starterDispatch().then(() => expect(store.getActions()).to.deep.equal(expectedActions))

  })


  it("if there is a data.error property from the response to the request function, it dispatches #endBookAPIRequest and #loadError", function() {

      let store = mockStore({})

      let mockData = {status: 200, resultsNumber: 2, results: mockLoadResults, error: true, message: "Something went wrong"}

      let apiRequestMock = sinon.mock().returns(Promise.resolve(mockData))

      let starterDispatch = async function() {
        await store.dispatch(getBookRecords(apiRequestMock))
      }

      let expectedActions = [
        endBookAPIRequest(),
        loadError(mockData.message)
      ]

      return starterDispatch().then(() => expect(store.getActions()).to.deep.equal(expectedActions))

    })


  it("if there is no data.error property from the response to the request function, but also no data.resultsNumber or data.results properties, it dispatches it dispatches #endBookAPIRequest and #loadError with a message", function() {

      let store = mockStore({})

      let mockData = {status: 200, resultsNumber: 3}

      let apiRequestMock = sinon.mock().returns(Promise.resolve(mockData))

      let starterDispatch = async function() {
        await store.dispatch(getBookRecords(apiRequestMock))
      }

      let expectedActions = [
        endBookAPIRequest(),
        loadError("Sorry, the data returned from the server was incomplete. Please try again.")
      ]

      return starterDispatch().then(() => expect(store.getActions()).to.deep.equal(expectedActions))

  })

})
