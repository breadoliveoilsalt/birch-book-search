import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { expect } from 'chai'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

import { getBookRecords } from '../../birch_modules/fetchRequestBasicSearch'
import { loadError, deleteError, beginBookAPIRequest, endBookAPIRequest } from '../../birch_modules/actionCreatorsAppStatus'
import { loadSearchTerms, increaseSearchStartingID, loadSearchResults, loadResultNumber, resetSearch } from '../../birch_modules/actionCreatorsUpdateSearchResults'


describe('getBookRecords', function() {

  afterEach(() => {
    fetchMock.restore()
  })

  it("does stuff", function() {

    fetchMock.getOnce('/todos', {
      body: { todos: ['do something'] },
      headers: { 'content-type': 'application/json' }
    })

    const store = mockStore({})

    const searchProperties = {
      searchTerms: "A good book",
      searchStartingID: 0,
      resultsPerSearch: 20
    }

    // WORKS:
    // store.dispatch({type: 'DELETE_ERROR'})

    // WORKS:
    // store.dispatch(deleteError())

    // NOT GETTING ACTIONS:
    store.dispatch(getBookRecords(searchProperties)).then(console.log("Actions: ", store.getActions()))

    // NOT GETTING ACTIONS:
    store.dispatch(getBookRecords(searchProperties))
    console.log("Actions: ", store.getActions())
  })
})
