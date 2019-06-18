import fetch from 'isomorphic-fetch'
import { endBookAPIRequest, loadError } from './actionCreatorsAppStatus'
import { loadSearchTerms, increaseSearchStartingID, loadSearchResults, resetSearch, loadResultNumber } from './actionCreatorsUpdateSearchResults'
import { BookRecord } from './bookRecordModel'


export function getBookRecords(searchTerms, searchStartingID, resultsPerSearch) {

  return function(dispatch) {

    const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
    // const apiKey =""
    const baseURL = `https://www.googleapis.com/books/v1/volumes?key=${apiKey}`

    fetch(baseURL + "&q=" + searchTerms + "&startIndex=" + searchStartingID + "&maxResults=" + resultsPerSearch)
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          let message = response.error.errors[0].message + "//" + response.error.errors[0].reason
          throw new Error(message)
        } else {
          return response
        }
      })
      .then(response => {
        dispatch(endBookAPIRequest())
        dispatch(loadResultNumber(response.totalItems))
        let bookRecordsForState = createBookRecords(response.items) // argument is an array
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
