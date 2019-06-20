import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { expect } from 'chai'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

import { getBookRecords } from '../../birch_modules/fetchRequestBasicSearch'
import { loadError, deleteError, beginBookAPIRequest, endBookAPIRequest } from '../../birch_modules/actionCreatorsAppStatus'
import { loadSearchTerms, increaseSearchStartingID, loadSearchResults, loadResultNumber, resetSearch } from '../../birch_modules/actionCreatorsUpdateSearchResults'

const searchProperties = {
  searchTerms: "A good book",
  searchStartingID: 0,
  resultsPerSearch: 20
}
//
// const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
// const baseURL = `https://www.googleapis.com/books/v1/volumes?key=${apiKey}`
// const url = baseURL + "&q=" + searchProperties.searchTerms + "&startIndex=" + searchProperties.searchStartingID + "&maxResults=" + searchProperties.resultsPerSearch

describe('getBookRecords', function() {

  afterEach(() => {
    fetchMock.restore()
  })

  it("does stuff", function() {
    //
    // let url = "/sample"
    // console.log("URL", url)

    fetchMock.getOnce("*", {status: 500})

    let store = mockStore({})

    return store.dispatch(getBookRecords(searchProperties)).then(() => console.log("Actions: ", store.getActions()))

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
  })
})
