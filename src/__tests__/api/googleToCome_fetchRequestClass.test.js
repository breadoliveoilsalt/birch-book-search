import { expect } from 'chai'

import { FetchRequest } from '../../birch_modules/FetchRequestClass'
import sinon from 'sinon'
import fetchMock from 'fetch-mock'

const sampleSearchProperties = {
  searchTerms: "A Good Book",
  searchStartingID: 0,
  resultsPerSearch: 20
}

describe("FetchRequest", function() {

  it("should return an instance of FetchRequest", function() {

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

      let expectedReturnValue = { error: true, message:'Sorry, there was an error with the search terms. Please try again.' }

      return getReturnValue().then(result => expect(result).to.deep.equal(expectedReturnValue))

      fetchMock.restore()
    })

    it("returns an object with an error property and a message if the response status code is 500", function() {

      fetchMock.mock("*", 500, {overwriteRoutes: true})

      let returnedFunctionWithFetchRequest = new FetchRequest(sampleSearchProperties).basicSearch()

      let getReturnValue = async () => await returnedFunctionWithFetchRequest()

      let expectedReturnValue = { error: true, message: 'Sorry, there appears to be a server error. Please try again in a bit.' }

      return getReturnValue().then(result => expect(result).to.deep.equal(expectedReturnValue))

    })

  })

})
