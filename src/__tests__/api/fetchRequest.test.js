import { expect } from 'chai'
import fetchMock from 'fetch-mock'

import FetchRequest from '../../api/FetchRequest'

let fetchRequestInstance

beforeEach(function() {
  const sampleProperties = {
    fetch: fetchMock.mock("*", 200, {overwriteRoutes: true}),
    searchTerms: "A Good Book"
  }
  fetchRequestInstance = new FetchRequest(sampleProperties)
})

afterEach(function(){
  fetchMock.restore()
})

describe("FetchRequest class", function() {

  it("should instantiate an instance of FetchRequest", function() {
    expect(fetchRequestInstance).to.be.an.instanceof(FetchRequest)
  })

  describe("a FetchRequest instance", function() {

    it("should have properties only for fetch and searchTerms", function() {
      expect(fetchRequestInstance).to.have.property('fetch')
      expect(fetchRequestInstance).to.have.property('searchTerms')

      let numberOfProperties = Object.keys(fetchRequestInstance).length

      expect(numberOfProperties).to.equal(2)
    })

  })

  describe("this.fetch", function() {

    it("should call the fetch function that is passed in as an argument when instantiating the instance ", function() {
      fetchRequestInstance.fetch("http://www.google.com")
      expect(fetchMock.called()).to.be.true
    })

  })
})
