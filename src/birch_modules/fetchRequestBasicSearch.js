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

  return function(dispatch) {

    fetch(baseURL + "&q=" + searchTerms + "&startIndex=" + searchStartingID + "&maxResults=" + resultsPerSearch)
      .then(response => response.json())
      .then(response => {
        // problem is I don't get the error message until I turn to json.  So maybe check for
        // error above, and then get message through converting response json.  Just have to convert it again below.
        if (response.error) {
          let message = response.error.errors[0].message + "//" + response.error.errors[0].reason // console.log this.
          throw new Error(message)
        } else {
          return response
        }
      })
      .then(response => {
        if (response.totalItems.length === 0) {
          throw new Error("Sorry, there were no results. Please try another search.")
        }
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
