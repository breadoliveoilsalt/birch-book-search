import rootReducer from '../../reducers/rootReducer'

import { expect } from 'chai'
import { loadError, deleteError, beginBookAPIRequest, endBookAPIRequest } from '../../birch_modules/actionCreatorsAppStatus'


describe("Initial state", function() {

  it("does something", function() {
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

    expect(rootReducer(undefined, {})).to.deep.equal(expectedInitialState)

   })
})
