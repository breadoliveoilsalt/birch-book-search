import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { expect } from 'chai'
import sinon from 'sinon'

import { getBookRecordsBasicSearch } from '../../birch_modules/getBookRecordsThunk'

import { loadError, beginBookAPIRequest, endBookAPIRequest } from '../../birch_modules/actionCreatorsAppStatus'
import { loadSearchTerms, loadSearchResults, loadResultNumber } from '../../birch_modules/actionCreatorsUpdateSearchResults'

///// SET UP /////
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

let mockFetchResponseItems = [{
  "imageURL": "http://books.google.com/books/content?id=2o_mEBpjucUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  "title": "Jimmy the Squirrel",
  "authors": "Amr Taher",
  "publisher": "AuthorHouse",
  "additionalInfoURL": "http://books.google.com/books?id=2o_mEBpjucUC&dq=jimmy&hl=&source=gbs_api"
},
{
  "imageURL": "http://books.google.com/books/content?id=OsbuBD3mkkkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  "title": "Jimmy Page",
  "authors": "George Case",
  "publisher": "Hal Leonard Corporation",
  "additionalInfoURL": "http://books.google.com/books?id=OsbuBD3mkkkC&dq=jimmy&hl=&source=gbs_api"
}]

class MockObject {
  constructor() {
  }
}

const mockLoadResults = mockFetchResponseItems.map(item => new MockObject)

///// END SET UP /////

describe('#getBookBasicSearch', function() {

  it("calling dispatch on #getBooksBasicSearch calls the request function passed with it", function(){

    let store = mockStore({})

        // Below, used Promise.resolve() to deal with fact that request() is followed by a .then
    let requestMock = sinon.mock().returns(Promise.resolve())

    return store.dispatch(getBookRecordsBasicSearch({request: requestMock, ModelToReturn: MockObject })).then(
      expect(requestMock.calledOnce).to.be.true
    )

  })

  it("if there is no data.error property from the response to the request function, it dispatches #endBookAPIRequest, #loadResultNumber, and #loadSearchResults", function() {

      let store = mockStore({})

      let mockData = {status: 200, totalItems: 3, items: mockFetchResponseItems}

      let requestMock = sinon.mock().returns(Promise.resolve(mockData))

      let starterDispatch = async function() {
        await store.dispatch(getBookRecordsBasicSearch({request: requestMock, ModelToReturn: MockObject }))
      }


      let expectedActions = [
        endBookAPIRequest(),
        loadResultNumber(mockData.totalItems),
        loadSearchResults(mockLoadResults)
      ]

      return starterDispatch().then(() => expect(store.getActions()).to.deep.equal(expectedActions))

  })


  it("if there is a data.error property from the response to the request function, it dispatches #endBookAPIRequest and #loadError", function() {

      let store = mockStore({})

      let mockData = {status: 200, totalItems: 3, items: mockFetchResponseItems, error: true, message: "Something went wrong"}

      let requestMock = sinon.mock().returns(Promise.resolve(mockData))

      let starterDispatch = async function() {
        await store.dispatch(getBookRecordsBasicSearch({request: requestMock, ModelToReturn: MockObject }))
      }

      let expectedActions = [
        endBookAPIRequest(),
        loadError(mockData.message)
      ]

      return starterDispatch().then(() => expect(store.getActions()).to.deep.equal(expectedActions))

    })


  it("if there is no data.error property from the response to the request function, it dispatches #loadSearchResults with instances of the ModelToReturn passed to #getBookRecordsBasicSearch", function() {

      let store = mockStore({})

      let mockData = {status: 200, totalItems: 3, items: mockFetchResponseItems}

      let requestMock = sinon.mock().returns(Promise.resolve(mockData))

      let starterDispatch = async function() {
        await store.dispatch(getBookRecordsBasicSearch({request: requestMock, ModelToReturn: MockObject }))
      }

      return starterDispatch().then(() => expect(store.getActions()[2].payload).to.deep.equal(mockLoadResults))

  })

})
