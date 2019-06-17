import fetch from 'isomorphic-fetch'
import { deleteError, loadError } from './actionCreatorsAppStatus'

const apiKey = process.env.GOOGLE_BOOKS_API_KEY
const baseURL = "https://www.googleapis.com/books/v1/volumes?key=${apiKey}"

export function getBookRecords(searchTerms, searchStartingID, resultsPerSearch) {
  return function(dispatch) {

    dispatch(deleteError())

    fetch(baseURL + "q=" + searchTerms + "startIndex=" + searchStartingID + "maxResults=" + resultsPerSearch)
      .then(response => response.json())
      .then(response => console.log(response))

  }
}
