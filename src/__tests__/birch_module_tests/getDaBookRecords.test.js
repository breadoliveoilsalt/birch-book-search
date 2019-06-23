import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { expect } from 'chai'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

import { getBookRecordsBasicSearch } from '../../birch_modules/getBookRecordsThunk'
import { loadError, deleteError, beginBookAPIRequest, endBookAPIRequest } from '../../birch_modules/actionCreatorsAppStatus'
import { loadSearchTerms, increaseSearchStartingID, loadSearchResults, loadResultNumber, resetSearch } from '../../birch_modules/actionCreatorsUpdateSearchResults'

const searchProperties = {
  searchTerms: "A good book",
  searchStartingID: 0,
  resultsPerSearch: 20
}

describe('getBookRecords', function() {

  afterEach(() => {
    fetchMock.restore()
  })

  it("does stuff", function() {

    let body = new FormData()
    body.append("status", "500")
    let response = new Response(body, {status:400})
    // let response = new Response(null, {status:400})
    // NOTE: mockFetch is seemingly not working, as the console log below produces BookRecords from an actual search
    // console.log("Resp:", response)

    fetchMock.getOnce("*", response)
    let store = mockStore({})
    return store.dispatch(getBookRecordsBasicSearch(searchProperties)).then(() => console.log("Actions: ", store.getActions()))

// GETTING CLOSE, I CAN SEE ACTIONS HERE, ALTHOUGH 500 CODE NOT RESPECTED
//     fetchMock.getOnce("*", {status: 500})
//     let store = mockStore({})
//     return store.dispatch(getBookRecords(searchProperties)).then(() => console.log("Actions: ", store.getActions()))

  })
})


    // WORKS:
    // store.dispatch({type: 'DELETE_ERROR'})

    // WORKS:
    // store.dispatch(deleteError())

    // NOT GETTING ACTIONS:
    // store.dispatch(getBookRecords(searchProperties)).then((resp) => console.log(resp))

    // console.log(fetchMock.lastUrl())
    // NOT GETTING ACTIONS:
    // store.dispatch(getBookRecords(searchProperties))
    // console.log("Actions: ", store.getActions())
