import fetch from 'isomorphic-fetch'
import { deleteError, loadError } from './actionCreatorsAppStatus'
import { loadSearchTerms, increaseSearchStartingID, loadSearchResults, resetSearch, loadResultNumber } from './actionCreatorsUpdateSearchResults'


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
        // .then(throwable()) => having a function that just throws an error stops React - it does not get picked up by the catch statement

      .then(response => {
        if (response.error) {
          let message = response.error.errors[0].message + ": " + response.error.errors[0].reason
          throw new Error(message)
        } else {
          return response
        }
      })
      .then(response => {
        dispatch(loadResultNumber(response.totalItems))
        let bookRecords = createBookRecords(response.items) // an array
      })
      .catch(error => {
        debugger
        dispatch(loadError(error.message))
      })

  }
}

// function throwable(){
//   return new Error("From throwable")
// }

function isEmpty(searchTerms) {
  return searchTerms === "" ? true : false
}

function escapeSearchTerms(searchTerms) {
  // To consider / discuss: what more to escape?
  return searchTerms.trim()
}

// function checkForErrorCode(response) {
//   debugger
//   let statusCode = response.status
//   if (Math.floor(statusCode/100) === 4) {
//     let errorMessage = "Yo"
//     return new Error("Yo")
//   }
//   debugger
// }

function createBookRecords(arrayOfAPIReturns) {

  let bookRecordsforReduxState = []

    arrayOfAPIReturns.forEach( bookRecord => {
        console.log("Record: ", bookRecord)
        let imageURL = getImageURL(bookRecord)
        let title = getTitle(bookRecord)
        let authors = getAuthors(bookRecord)
        let publisher = getPublisher(bookRecord)
        let additionalInfoURL = getAdditionalInfoURL(bookRecord)

        debugger
    })

    function getImageURL(bookRecord) {
      try {
        return exists(bookRecord.volumeInfo.imageLinks.thumbnail) ? bookRecord.volumeInfo.imageLinks.thumbnail : null
        // let imageURL = null
        // if (exists(bookRecord.volumeInfo.imageLinks.thumbnail)) {
        //   imageURL = bookRecord.volumeInfo.imageLinks.thumbnail
        // }
        // return imageURL
      } catch {
        return null
      }
    }

    function getTitle(bookRecord) {
      // Consider adding subtitle.
      try {
        return exists(bookRecord.volumeInfo.title) ? bookRecord.volumeInfo.title : null
        // let title = null
        // if (exists(bookRecord.volumeInfo.title)) {
        //   title = bookRecord.volumeInfo.title
        // }
        // return title
      } catch {
        return null
      }
    }

    function getAuthors(bookRecord) {
      try {
        let authors = null

        if (exists(bookRecord.volumeInfo.authors) && bookRecord.volumeInfo.authors.length > 0) {
          authors = bookRecord.volumeInfo.authors[0]

          for (let i = 1; i < bookRecord.volumeInfo.authors.length; i++) {
            authors += ` & ${bookRecord.volumeInfo.authors[i]}`
          }
        }
        return authors
      } catch {
        return null
      }
    }

    function getPublisher(bookRecord) {
      try {
        return exists(bookRecord.volumeInfo.publisher) ? bookRecord.volumeInfo.publisher : null
        // let publisher = null
        // if (exists(bookRecord.volumeInfo.publisher)) {
        //   publisher = bookRecord.volumeInfo.publisher
        // }
        // return publisher
      } catch {
        return null
      }
    }

    function getAdditionalInfoURL(bookRecord) {
      try {
        // let additionalInfoURL = null
        // if (exists(bookRecord.volumeInfo.infoLink)) {
        //   additionalInfoURL = bookRecord.volumeInfo.infoLink
        // }
        // return additionalInfoURL
        return exists(bookRecord.volumeInfo.infoLink) ? bookRecord.volumeInfo.infoLink : null
      } catch {
        return null
      }
    }
}

function exists(entry) {
  return entry !== undefined && entry !== ""
}
