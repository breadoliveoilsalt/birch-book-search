import fetch from 'isomorphic-fetch'
import { endBookAPIRequest, loadError } from './actionCreatorsAppStatus'
import { loadSearchTerms, increaseSearchStartingID, loadSearchResults, resetSearch, loadResultNumber } from './actionCreatorsUpdateSearchResults'
import { BookRecord } from './bookRecordModel'

export function getBookRecords(searchProperties) {

  const searchTerms = searchProperties.searchTerms
    // Next line: Without '|| 0', searchStartingID === undefined when searchProperties.searchStartingID = 0
  const searchStartingID = searchProperties.searchStartingID || 0
  const resultsPerSearch = searchProperties.resultsPerSearch

  const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
  // const apiKey =""
  const baseURL = `https://www.googleapis.com/books/v1/volumes?key=${apiKey}`
  const url = baseURL + "&q=" + searchTerms + "&startIndex=" + searchStartingID + "&maxResults=" + resultsPerSearch
  // const url = "https://www.breadoliveoilsalt.com"
  // const url = "/sample"

  return function(dispatch) {

    return fetch(url)
      .then(response => {
        console.log("Response: ", response)
        let responseStatus = checkResponse(response)
        if (responseStatus.error) {
          throw new Error(responseStatus.message)
        } else
          return response.json()
        })
      .then(data => {
        // console.log("Data: ", data)
        let dataStatus = checkData(data)
        if (dataStatus.error) {
          throw new Error(dataStatus.message)
        } else
          return data
        })
      .then(data => {
        dispatch(endBookAPIRequest())
        dispatch(loadResultNumber(data.totalItems))
        let bookRecordsForState = createBookRecords(data.items) // argument is an array
        dispatch(loadSearchResults(bookRecordsForState))
      })
      .catch(error => {
        dispatch(endBookAPIRequest())
        dispatch(loadError(error.message))
      })
  }
}

// PRIVATE FUNCTIONS

function createBookRecords(arrayOfAPIReturns) {

  let bookRecordsForState = []

  arrayOfAPIReturns.forEach( bookRecord => {
    let bookRecordForState = new BookRecord(bookRecord.volumeInfo) // argument is an object
    bookRecordsForState.push(bookRecordForState)
  })

  return bookRecordsForState

}

function checkResponse(response) {

  let status = {error: false, message: null}

  let statusCodeIndicator = Math.floor(response.status/100)

  if (statusCodeIndicator === 4) {
    status.error = true
    status.message = "Sorry, there was an error with the search terms. Please try again."
  } else if (statusCodeIndicator === 5) {
    status.error = true
    status.message = "Sorry, there appears to be a server error. Please try again in a bit."
  }

  return status
}

function checkData(data) {
  let status = {error: false, message: null}
  if (data.error) {
    try {
      let longerMessage = data.error.errors[0].message + "//" + data.error.errors[0].reason
      status.error = true
      status.message = longerMessage
    } catch {
      status.error = true
      status.message = "Sorry, there appears to be an error. Please try again."
    }
  } else if (data.totalItems.length === 0) {
    status.error = true
    status.message = "Sorry, there were no results. Please try another search."
  }

  return status
}
