import rootReducer from '../../reducers/rootReducer' 

import { expect } from 'chai'
import { loadError, deleteError, beginBookAPIRequest, endBookAPIRequest } from '../../birch_modules/actionCreatorsAppStatus'
import { loadSearchTerms, increaseSearchStartingID, loadSearchResults, loadResultNumber, resetSearch } from '../../birch_modules/actionCreatorsUpdateSearchResults'

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

    const newState = rootReducer(undefined, {})
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

      const newState = rootReducer(expectedInitialState, loadError(message))

      expect(newState).to.deep.equal(expectedNewState)

   })

   it("should replace an error message in the state with null when called with #deleteError(message)", function() {

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

      const newState = rootReducer(currentState, deleteError())

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

      const newState = rootReducer(expectedInitialState, beginBookAPIRequest())

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


      const newState = rootReducer(currentState, endBookAPIRequest())

      expect(newState).to.deep.equal(expectedInitialState)

   })

   it("should load search terms into the state when called with #loadSearchTerms()", function() {

     const expectedNewState = {
           appStatus: {
             makingBookAPIRequest: false,
             currentError: null
           },
           currentSearch:
            { userSearchTerms: "Stephen King",
              resultsPerSearch: 20,
              searchStartingID: 0,
              results: [],
              resultNumber: 0
            }
          }


      const newState = rootReducer(expectedInitialState, loadSearchTerms("Stephen King"))

      expect(newState).to.deep.equal(expectedNewState)

   })

   it("should should increase the searchStartingID by 20 when called with #increaseSearchStartingID", function() {

     const expectedNewState1 = {
           appStatus: {
             makingBookAPIRequest: false,
             currentError: null
           },
           currentSearch:
            { userSearchTerms: null,
              resultsPerSearch: 20,
              searchStartingID: 20,
              results: [],
              resultNumber: 0
            }
          }


    const newState1 = rootReducer(expectedInitialState, increaseSearchStartingID())

    expect(newState1).to.deep.equal(expectedNewState1)

    /////

    const expectedNewState2 = {
           appStatus: {
             makingBookAPIRequest: false,
             currentError: null
           },
           currentSearch:
            { userSearchTerms: null,
              resultsPerSearch: 20,
              searchStartingID: 40,
              results: [],
              resultNumber: 0
            }
          }

    const newState2 = rootReducer(newState1, increaseSearchStartingID())

    expect(newState2).to.deep.equal(expectedNewState2)

   })

   it("should add search results into the state when called with #loadSearchResults", function() {

     const searchResults1 = [{
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

     const expectedNewState1 = {
           appStatus: {
             makingBookAPIRequest: false,
             currentError: null
           },
           currentSearch:
            { userSearchTerms: null,
              resultsPerSearch: 20,
              searchStartingID: 0,
              results: searchResults1,
              resultNumber: 0
            }
          }

     const newState1 = rootReducer(expectedInitialState, loadSearchResults(searchResults1))

     expect(newState1).to.deep.equal(expectedNewState1)

     /////

     let searchResults2 = [{
        "imageURL": "http://books.google.com/books/content?id=d0NEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "title": "Why Not the Best?",
        "authors": "Jimmy Carter",
        "publisher": "University of Arkansas Press",
        "additionalInfoURL": "http://books.google.com/books?id=d0NEDwAAQBAJ&dq=jimmy&hl=&source=gbs_api"
      }]

     const expectedNewState2 = {
            appStatus: {
              makingBookAPIRequest: false,
              currentError: null
            },
            currentSearch:
             { userSearchTerms: null,
               resultsPerSearch: 20,
               searchStartingID: 0,
               results: [...searchResults1, ...searchResults2],
               resultNumber: 0
             }
           }

     const newState2 = rootReducer(newState1, loadSearchResults(searchResults2))

     expect(newState2).to.deep.equal(expectedNewState2)

   })

   it("should add the search results number into the state when called with #loadResultNumber", function() {

     const expectedNewState = {
           appStatus: {
             makingBookAPIRequest: false,
             currentError: null
           },
           currentSearch:
            { userSearchTerms: null,
              resultsPerSearch: 20,
              searchStartingID: 0,
              results: [],
              resultNumber: 15
            }
          }

     const newState = rootReducer(expectedInitialState, loadResultNumber(15))

     expect(newState).to.deep.equal(expectedNewState)
   })

   it("should reset the currentSearch state back to its expected initial state when called with #resetSearch", function(){

     const currentState = {
           appStatus: {
             makingBookAPIRequest: false,
             currentError: null
           },
           currentSearch:
            { userSearchTerms: "azyzx",
              resultsPerSearch: 20,
              searchStartingID: 0,
              results: [{title: "Nothing"}, {author: "Nobody"}],
              resultNumber: 2
            }
          }

     const newState = rootReducer(currentState, resetSearch())

     expect(newState).to.deep.equal(expectedInitialState)

   })

})
