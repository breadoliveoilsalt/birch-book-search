import fetch from 'isomorphic-fetch'
import { deleteError, loadError } from './actionCreatorsAppStatus'

const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
const baseURL = `https://www.googleapis.com/books/v1/volumes?key=${apiKey}`

export function getBookRecords(searchTerms, searchStartingID, resultsPerSearch) {
  return function(dispatch) {

    dispatch(deleteError())

    let escapedSearchTerms = searchTerms.trim()

    if (isEmpty(escapedSearchTerms)) {
      dispatch(loadError("No blank searches please."))
      return
    }

    fetch(baseURL + "&q=" + escapedSearchTerms + "&startIndex=" + searchStartingID + "&maxResults=" + resultsPerSearch)
    // fetch("https://www.googleapis.com/books/v1/volumes?q=flower&key=AIzaSyB-7zrPGonH670oGFkTLVipMRItxnqNqDo&startIndex=11"      )
      .then(response => response.json())
      .then(response => {
        console.log("Here's the response:  ", response)
      })
      //   if (response.error.code === 400) {
      //     throw new Error(response)
      //   }
      // })
      // .catch(event => {
      //   debugger
      //   dispatch(loadError(`${event.error.errors[0].message}: ${event.error.errors[0].reason}`))
      //
      // })

  }
}


function isEmpty(searchTerms) {
  return searchTerms === "" ? true : false
}
