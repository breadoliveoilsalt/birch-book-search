import React from 'react'
import { expect } from 'chai'

import { getBookRecords } from '../../birch_modules/fetchRequestBasicSearch'

describe("getBoookRecords()", function(){

  it("should throw an error if not passed as an argument an object that is a hash", function(){


  })

  it("takes as arguments the query search terms, startingId, and results per request", function(){

  })

  it("should dispatch an error to the Redux state about the google API if the API returns a 500 error", function(){

  })

  it("should dispatch an error to the Redux state about the query if the search produces 0 records", function() {

  })

  it("should dispatch an error to the Redux state about the query if the API returns a 400 error", function() {

  })

  it("should dispatch a default error to the Redux state if the API otherwise does not return a 200 code error", function(){

  })

  it("should create a SearchResult object for each record returned if the API returns a 200 code", function() {

  })

  it("should load the SearchResults object into the Redux state // or it should call dispatch if I want to test that it is called...", function() {

  })

  it("should cap the results returned according to results per request", function() {

  })

  it("should return the first result starting with startingId", function() {

  })
})
