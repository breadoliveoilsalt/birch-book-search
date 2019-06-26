import { expect } from 'chai'

import { FetchRequest } from '../../birch_modules/FetchRequestClass'
import sinon from 'sinon'
import fetchMock from 'fetch-mock'

// NOTE: for fetchMock to work with isomorphic-fetch, actual file must rely on
// import 'isomorphic-fetch' - NOT import fetch from 'isomorphic-fetch'


const sampleSearchProperties = {
  searchTerms: "A Good Book",
  searchStartingID: 0,
  resultsPerSearch: 20
}

describe("FetchRequest", function() {

  it("should return an instance of BookRecord", function() {

    let request = new FetchRequest(sampleSearchProperties)
    expect(request).to.be.an.instanceof(FetchRequest)

  })

  describe("a FetchRequest instance", function() {

    it("should have properties only for apiKey, baseURL, searchTerms, searchStartingID, resultsPerSearch", function() {

      let request = new FetchRequest(sampleSearchProperties)

      expect(request).to.have.property('apiKey')
      expect(request).to.have.property('baseURL')
      expect(request).to.have.property('searchTerms')
      expect(request).to.have.property('searchStartingID')
      expect(request).to.have.property('resultsPerSearch')

      let numberOfProperties = Object.keys(request).length

      expect(numberOfProperties).to.equal(5)

    })

    it("should set searchTerms to null when instantiated with an object/hash that does not specifiy such properties", function() {

      let tempSearchProperties = {
        searchStartingID: 0,
        resultsPerSearch: 20
      }

      let request = new FetchRequest(tempSearchProperties)

      expect(request.searchTerms).to.equal(null)

    })

    it("should set searchStartingID to 0 and resultsPerSearch to 20 when instantiated with an object/hash that does not specifiy such properties", function() {

      let tempSearchProperties = {
      }

      let request = new FetchRequest(tempSearchProperties)

      expect(request.searchStartingID).to.equal(0)
      expect(request.resultsPerSearch).to.equal(20)

    })

  })

  describe("#basicSearch", function(){

    it("returns a function that, when called, calls fetch", function() {

      fetchMock.mock("*", 200)

      let returnedFunctionWithFetchRequest = new FetchRequest(sampleSearchProperties).basicSearch()

      returnedFunctionWithFetchRequest()
      expect(fetchMock.called()).to.be.true

      fetchMock.restore()

    })

    it("returns an object with an error property and a message if the response status code is 400", function() {

      fetchMock.mock("*", 400)

      let returnedFunctionWithFetchRequest = new FetchRequest(sampleSearchProperties).basicSearch()

      let getReturnValue = async () => await returnedFunctionWithFetchRequest()

      let expectedReturnValue =  { error: true, message: 'Sorry, there appears to be an error. Please try again.' }

      getReturnValue().then(result => console.log("4", result))

      getReturnValue().then(result => expect(result).to.deep.equal(expectedReturnValue))

      fetchMock.restore()
    })

    it("returns an object with an error property and a message if the response status code is 500", function() {

      fetchMock.mock("*", 500, {overwriteRoutes: true})

      let returnedFunctionWithFetchRequest = new FetchRequest(sampleSearchProperties).basicSearch()

      let getReturnValue = async () => await returnedFunctionWithFetchRequest()

      getReturnValue().then(result => console.log(result))

      // let expectedReturnValue =  { error: true, message: 'Sorry, there appears to be an error. Please try again.' }

      // return getReturnValue().then(result => expect(result).to.deep.equal(expectedReturnValue))

    })

  })

})


//
//
//       // Please note: this is such a clunky test. Same below.  Because basicSearch() is async and returns a promise,
//       // I had a very hard time using it with `expect`.  I ultimately came up with the idea to use
//       // async/await.  When adding `return result()`, the test was being interrupted
//       // by the error being thrown in result().  So I knew fetchMock was working and the error I wanted
//       // to test was, in fact, being thrown.  [Note: without prepending `return`, nothing happened.
//       // But how to check that with `expect`?  Using `throw()`
//       // wasn't working.   And I kept getting warnings at the top of the test that a promise [here result()],
//       // wasn't being resolved without a catch statement.  So I figured result() needed a catch, and if that
//       // catch was being hit, then it proved we had an error being throw.
//       // Cluncky indeed.
//
//       // Should build out with way to test the error message that is thrown.
//
//       fetchMock.mock("*", 400)
//
//       let requestInstance = new FetchRequest(sampleSearchProperties)
//
//       let result = async () => await requestInstance.basicSearch()
//
//       return result().catch(() => expect(true).to.be.true)
//
//       fetchMock.restore()
//
//     })
//
//
//     it("throws an error if the response status code is 500", function() {
//
//       // See clunky test notes above
//
//       fetchMock.mock("*", 500, {overwriteRoutes: true})
//
//       let requestInstance = new FetchRequest(sampleSearchProperties)
//
//       let result = async () => await requestInstance.basicSearch()
//
//       return result().catch(() => expect(true).to.be.true)
//
//       fetchMock.restore()
//
//     })
//
//     // it("Not sure how to test presently: returns certain error messages when throwing errors", function() {
//     //
//     //   expect(true).to.be.false
//     //
//     // })
//   })
// })
