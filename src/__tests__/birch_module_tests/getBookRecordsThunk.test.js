import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { expect } from 'chai'

import { getBookRecordsBasicSearch } from '../../birch_modules/getBookRecordsThunk'

import { loadError, deleteError, beginBookAPIRequest, endBookAPIRequest } from '../../birch_modules/actionCreatorsAppStatus'
import { loadSearchTerms, increaseSearchStartingID, loadSearchResults, loadResultNumber, resetSearch } from '../../birch_modules/actionCreatorsUpdateSearchResults'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const sampleSearchProperties = {
  searchTerms: "A good book",
  searchStartingID: 0,
  resultsPerSearch: 20
}

describe('#getBookBasicSearch', function() {

  it("calls the request function passed to it", function(){
  })

})
  // afterEach(() => {
  //   fetchMock.restore()
  // })
  //
  // it("does stuff", function() {
  //
  //   let body = new FormData()
  //   body.append("status", "500")
  //   let response = new Response(null, {status:400})
  //   console.log("Resp:", response)
  //
  //   fetchMock.getOnce("*", response)
  //   let store = mockStore({})
  //   return store.dispatch(getBookRecords(searchProperties)).then(() => console.log("Actions: ", store.getActions()))

// GETTING CLOSE, I CAN SEE ACTIONS HERE, ALTHOUGH 500 CODE NOT RESPECTED
//     fetchMock.getOnce("*", {status: 500})
//     let store = mockStore({})
//     return store.dispatch(getBookRecords(searchProperties)).then(() => console.log("Actions: ", store.getActions()))
//
//   })
// })


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
