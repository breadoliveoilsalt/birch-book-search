import React from 'react'

import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store' // this is only helpful for seeing if something was dispatched
import configureStore from '../../configureStore'

import fetchMock from 'fetch-mock'
import { expect } from 'chai'

import * as appStatus from '../../birch_modules/actionCreatorsAppStatus'
import * as updateSearchResults from '../../birch_modules/actionCreatorsUpdateSearchResults'

/// Big probs caused by having below in brackets! Export correctly!!
import appStatusReducer from '../../reducers/appStatusReducer'
import { getBookRecords } from '../../birch_modules/fetchRequestBasicSearch'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

import { createStore } from 'redux'
import rootReducer from '../../reducers/rootReducer'



describe("getBoookRecords()", function(){

  afterEach(function() {
    fetchMock.restore()
  })

  it("should dispatch an error to the Redux state about the google API if the API returns a 500 error", function() {
    fetchMock.getOnce('https://www.googlebooksapi.com', {
      status: 500
      // body: { todos: ['do something'] },
      // headers: { 'status': 'application/json' }
    })

    // let mockProperties = {
    //   makingBookAPIRequest: false,
    //   currentError: null
    // }
      // this top one sets something at least
    // const store = mockStore(mockProperties)
    // const store = mockStore(appStatusReducer)
    // const store = createStore(appStatusReducer)
      // this one below actually makes a store
    // const store = createStore(rootReducer)
    let store = configureStore()
    // console.log("Store start: ", store)
    console.log("Store state: ", store.getState())



    let searchProperties = {
      searchTerms: "A good book",
      searchStartingID: 0,
      resultsPerSearch: 20
    }

    // store.dispatch(() => getBookRecords(searchProperties))
    // store.dispatch(getBookRecords(searchProperties))

    store.dispatch({type: 'BEGIN_BOOK_API_REQUEST'})
    let newState = store.getState()

    expect(newState.appStatus.makingBookAPIRequest).to.equal(true)
    console.log("Passed First!")

    store.dispatch(getBookRecords(searchProperties))
    console.log("Got to second dispatch")
    // console.log("New store: ", store.getState())
    // return store.dispatch(() => getBookRecords(searchProperties)).then(() => {
    //   let newStore = store.getState()
    //   console.log("Store: ", newStore)

     // return of async actions
     // const actions = store.getActions()
     // expect(actions).to.include(appStatus.loadError())
     // expect(store.appStatus).to.not.be(null)

  })
})

//
// it("should throw an error if not passed as an argument an object that is a hash", function(){
//
//   // To come in light of revisions
//
// })
// //
// // it("takes an argument a hash with the properties query search terms, startingId, and results per request", function(){
// //
// // })

  // it("should dispatch an error to the Redux state about the query if the search produces 0 records", function() {
  //
  // })
  //
  // it("should dispatch an error to the Redux state about the query if the API returns a 400 error", function() {
  //
  // })
  //
  // it("should dispatch a default error to the Redux state if the API otherwise does not return a 200 code error", function(){
  //
  // })
  //
  // it("should create a SearchResult object for each record returned if the API returns a 200 code", function() {
  //
  // })
  //
  // it("should load the SearchResults object into the Redux state // or it should call dispatch if I want to test that it is called...", function() {
  //
  // })
  //
  // it("should cap the results returned according to results per request", function() {
  //
  // })
  //
  // it("should return the first result starting with startingId", function() {
  //
  // })
