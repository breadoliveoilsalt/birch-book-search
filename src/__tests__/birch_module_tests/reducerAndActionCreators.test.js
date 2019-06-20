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

    expect(rootReducer(undefined, {})).to.deep.equal(expectedInitialState)

   })

   it("should load an error message into the state when called with loadError(message)", function() {

     const message = "You need more specific search terms"

     const expectedState = {
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

      let newState = rootReducer(undefined, loadError(message))

      expect(newState).to.deep.equal(expectedState)
      expect(newState).to.not.equal(expectedState)

   })
})
