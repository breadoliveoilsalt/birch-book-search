import fetch from 'isomorphic-fetch'
import { deleteError, loadError } from './actionCreatorsAppStatus'
import { loadSearchTerms, increaseSearchStartingID, loadSearchResults, resetSearch, loadResultNumber } from './actionCreatorsUpdateSearchResults'
import BookRecord from './bookRecordClass'


const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
// const apiKey =""
const baseURL = `https://www.googleapis.com/books/v1/volumes?key=${apiKey}`

export function getBookRecords(searchTerms, searchStartingID, resultsPerSearch) {

  return function(dispatch) {

    dispatch(deleteError())

    let escapedSearchTerms = escapeSearchTerms(searchTerms)

    if (isEmpty(escapedSearchTerms)) {
      dispatch(loadError("No blank searches please."))
      return
    }

    fetch(baseURL + "&q=" + escapedSearchTerms + "&startIndex=" + searchStartingID + "&maxResults=" + resultsPerSearch)
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
        dispatch(loadResultNumber(response.totalItems))
        let bookRecords = createBookRecords(response.items) // argument is an array
      })
      .catch(error => {
        dispatch(loadError(error.message))
      })

  }
}

// PRIVATE FUNCTIONS

function isEmpty(searchTerms) {
  return searchTerms === "" ? true : false
}

function escapeSearchTerms(searchTerms) {
  // To consider / discuss: what more to escape?
  return searchTerms.trim()
}

function createBookRecords(arrayOfAPIReturns) {

  let bookRecordsForState = []

  arrayOfAPIReturns.forEach( bookRecord => {
    let bookRecordForState = new BookRecord(bookRecord.volumeInfo) // argument is an object
    booksRecordsForState.push(bookRecordForState)
  })

  return bookRecordsForState

}
