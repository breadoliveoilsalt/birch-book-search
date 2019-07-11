import { expect } from 'chai'
import sinon from 'sinon'
import fetchMock from 'fetch-mock'

import GoogleBooksAPIRequest from '../../api/googleBooksAPIRequest'
import FetchRequest from '../../api/FetchRequest'

fetchMock.config.overwriteRoutes = true
let googleBooksRequest

beforeEach(function() {
  const sampleProperties = {
    fetch: fetchMock.mock("*", 200),
    searchTerms: "A Good Book",
    searchStartingID: 0,
    resultsPerSearch: 20
  }

  googleBooksRequest = new GoogleBooksAPIRequest(sampleProperties)
})

afterEach(function() {
  fetchMock.restore()
})

describe("GoogleBooksAPIRequest class", function() {

  it("should instantiate an instance of GoogleBooksAPIRequest that extends FetchRequest", function() {
    expect(googleBooksRequest).to.be.an.instanceof(GoogleBooksAPIRequest)
  })

  describe("a GoogleBooksAPIRequest instance", function() {

    it("should have properties only for fetch, searchTerms, apiKey, searchStartingID, resultsPerSearch", function() {

      expect(googleBooksRequest).to.have.property('fetch')
      expect(googleBooksRequest).to.have.property('searchTerms')
      expect(googleBooksRequest).to.have.property('apiKey')
      expect(googleBooksRequest).to.have.property('searchStartingID')
      expect(googleBooksRequest).to.have.property('resultsPerSearch')

      let numberOfProperties = Object.keys(googleBooksRequest).length

      expect(numberOfProperties).to.equal(5)

    })

    it("should set searchTerms to null when instantiated with an object/hash that does not specifiy such properties", function() {

      let tempSearchProperties = {
        searchStartingID: 0,
        resultsPerSearch: 20
      }

      let request = new GoogleBooksAPIRequest(tempSearchProperties)

      expect(request.searchTerms).to.equal(null)

    })

    it("should set searchStartingID to 0 and resultsPerSearch to 20 when instantiated with an object/hash that does not specifiy such properties", function() {

      let tempSearchProperties = {
      }

      let request = new GoogleBooksAPIRequest(tempSearchProperties)

      expect(request.searchStartingID).to.equal(0)
      expect(request.resultsPerSearch).to.equal(20)

    })

  })

  describe("#basicSearchWithAPIKey", function(){

    it("returns a function that, when called, calls fetch", function() {

      let returnedFunction = googleBooksRequest.basicSearchWithAPIKey()
      returnedFunction()
      expect(fetchMock.called()).to.be.true

    })

    it("returns an object with an error property and a message if the response status code is 400", function() {

      fetchMock.mock("*", 400)
      let returnedFunction = googleBooksRequest.basicSearchWithAPIKey()
      let getReturnValue = async () => await returnedFunction()
      let expectedReturnValue = { error: true, message:'Sorry, there was an error with the search terms. Please try again.' }

      return getReturnValue().then(result => expect(result).to.deep.equal(expectedReturnValue))

    })

    it("returns an object with an error property and a message if the response status code is 500", function() {

      fetchMock.mock("*", 500)
      let returnedFunction = googleBooksRequest.basicSearchWithAPIKey()
      let getReturnValue = async () => await returnedFunction()
      let expectedReturnValue = { error: true, message: 'Sorry, there appears to be a server error. Please try again in a bit.' }

      return getReturnValue().then(result => expect(result).to.deep.equal(expectedReturnValue))

    })

    it("returns an object with an error property and a message if there are no results", function() {

      fetchMock.mock("*", {overwriteRoutes: true, body: {totalItems: "0"}})
      let returnedFunction = googleBooksRequest.basicSearchWithAPIKey()
      let getReturnValue = async () => await returnedFunction()
      let expectedReturnValue = { error: true, message: 'Sorry, there were no results. Please try another search.' }

      return getReturnValue().then(result => expect(result).to.deep.equal(expectedReturnValue))
      
    })

  })

})
