import configureStore from '../../configureStore'
import { expect } from 'chai'
import { loadError, deleteError, beginBookAPIRequest, endBookAPIRequest } from '../../birch_modules/actionCreatorsAppStatus'

const expectedInitialState = {
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

describe("loadError(message)", function() {

  it("returns an object {type: 'LOAD_ERROR', payload: message}", function() {
    let message = "You need more specific search terms"

    let returnValue = loadError(message)
    let expectedReturnValue = {type: 'LOAD_ERROR', payload: "You need more specific search terms"}

    expect(returnValue).to.deep.equal(expectedReturnValue)
  })

  describe("when called with dispatch, loads the error into the state", function() {
    let store = configureStore()
    let initialState = store.getState()

    expect(initialState).to.deep.equal(expectedInitialState)

    let message = "You need more specific search terms"

    store.dispatch(loadError(message))

    let expectedNewState = {
          appStatus: {
            makingBookAPIRequest: false,
            currentError: "You need more specific search terms"
          },
          currentSearch:
           { userSearchTerms: null,
             resultsPerSearch: 20,
             searchStartingID: 0,
             results: [],
             resultNumber: 0
           }
         }

    let newState = store.getState()

    expect(newState).to.deep.equal(expectedNewState)
    expect(newState).to.not.equal(initialState)

  })
})

// export function loadError(payload) {
//   return (
//     {type: 'LOAD_ERROR',
//     payload: message}
//   )
// }
//
// export function deleteError(){
//   return (
//     {type: 'DELETE_ERROR'}
//   )
// }
//
// export function beginBookAPIRequest(){
//   return (
//     {type: 'BEGIN_BOOK_API_REQUEST'}
//   )
// }
//
// export function endBookAPIRequest(){
//   return (
//     {type: 'END_BOOK_API_REQUEST'}
//   )
// }
