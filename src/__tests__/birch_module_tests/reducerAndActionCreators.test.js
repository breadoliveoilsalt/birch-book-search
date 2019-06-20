import rootReducer from '../../reducers/rootReducer'

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

describe("Root reducer", function() {

  it("should return the expected initial state when called without state or action arguments", function() {

    let newState = rootReducer(undefined, {})
    expect(newState).to.deep.equal(expectedInitialState)
    expect(newState).to.not.equal(expectedInitialState)

   })

   it("should load an error message into the state when called with #loadError(message)", function() {

     const message = "You need more specific search terms"

     const expectedNewState = {
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

      let newState = rootReducer(expectedInitialState, loadError(message))

      expect(newState).to.deep.equal(expectedNewState)

   })

   it("should replace an error message in the statue with null when called with #deleteError(message)", function() {

     const currentState = {
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

      let newState = rootReducer(currentState, deleteError())

      expect(newState).to.deep.equal(expectedInitialState)

   })


   it("should indicate an API request is being made when called with #beginBookAPIRequest()", function() {

      const expectedNewState = {
            appStatus: {
              makingBookAPIRequest: true,
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

      let newState = rootReducer(expectedInitialState, beginBookAPIRequest())

      expect(newState).to.deep.equal(expectedNewState)

   })

   it("should indicate an API request has ended when called with #endBookAPIRequest()", function() {

     const currentState = {
           appStatus: {
             makingBookAPIRequest: true,
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


      let newState = rootReducer(currentState, endBookAPIRequest())

      expect(newState).to.deep.equal(expectedInitialState)

   })

})
