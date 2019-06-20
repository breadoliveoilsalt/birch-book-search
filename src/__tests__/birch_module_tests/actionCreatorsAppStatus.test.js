// import configureStore from '../../configureStore'



import { expect } from 'chai'
import { loadError, deleteError, beginBookAPIRequest, endBookAPIRequest } from '../../birch_modules/actionCreatorsAppStatus'


import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import loggerMiddleware from '../../middleware/logger'

const middlewares = [ loggerMiddleware, thunk ] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

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

describe("deleteError()", function() {

  it("returns an object {type: 'DELETE_ERROR'}", function() {

    let returnValue = deleteError()
    let expectedReturnValue = {type: 'DELETE_ERROR'}

    expect(returnValue).to.deep.equal(expectedReturnValue)
  })

  describe("when called with dispatch, replaces the error in the state with null", function() {

    let initialState = {
          appStatus: {
            makingBookAPIRequest: false,
            currentError: "There's an error here"
          },
          currentSearch:
           { userSearchTerms: null,
             resultsPerSearch: 20,
             searchStartingID: 0,
             results: [],
             resultNumber: 0
           }
         }

    const store = mockStore(initialState)

    store.dispatch(deleteError())

    let expectedNewState = {
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

    console.log("Current Store: ", store.getState())
    let newState = store.getState()

    let actions = store.getActions()
    console.log("Actions:", actions)

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
