import fetch from 'isomorphic-fetch'
import { deleteError, loadError } from './actionCreatorsAppStatus'
// need to load result number

// const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
const apiKey =""
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

      .then(response => {
        // checkForErrorCode(response)
        return response.json()
      })
      .then(response => {
        if (response.error) {
          let message = response.error.errors[0].message + ": " + response.error.errors[0].reason
          throw new Error(message)
        }

        console.log("Here's the response:  ", response)
      })
      .catch(error => {
        dispatch(loadError(error.message))
      })

  }
}

function isEmpty(searchTerms) {
  return searchTerms === "" ? true : false
}

function escapeSearchTerms(searchTerms) {
  // To consider / discuss: what more to escape?
  return searchTerms.trim()
}

function checkForErrorCode(response) {
  debugger
  let statusCode = response.status
  if (Math.floor(statusCode/100) === 4) {
    let errorMessage = "Yo"
    return new Error("Yo")
  }
  debugger
}
