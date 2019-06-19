import fetch from 'isomorphic-fetch'
import { endBookAPIRequest, loadError } from './actionCreatorsAppStatus'
import { loadSearchTerms, increaseSearchStartingID, loadSearchResults, resetSearch, loadResultNumber } from './actionCreatorsUpdateSearchResults'
import { BookRecord } from './bookRecordModel'


// SEE!! : https://michalzalecki.com/testing-redux-thunk-like-you-always-want-it/
// pay close attn to how he does this.  


// TO TRY
// return new Promise((resolve, reject) => {
//   resolve(newSearch.search().bind(newSearch))
// })


// export function getBookRecords(searchProperties) {
//
//   return function(dispatch) {
//
//     let newSearch = new FetchRequestBasicSearch(searchProperties)
//
//     newSearch.search.then(response => {
//       if (response.totalItems.length === 0) {
//         throw new Error("Sorry, there were no results. Please try another search.")
//       }
//       dispatch(endBookAPIRequest())
//       dispatch(loadResultNumber(response.totalItems))
//       let bookRecordsForState = createBookRecords(response.items) // argument is an array
//       dispatch(loadSearchResults(bookRecordsForState))
//     })
//     .catch(error => {
//       dispatch(endBookAPIRequest())
//       dispatch(loadError(error.message))
//     })
//   }
// }
//
// // PRIVATE FUNCTIONS
//
// class FetchRequestBasicSearch {
//
//   constructor(searchProperties) {
//     this.apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
//     this.baseURL = `https://www.googleapis.com/books/v1/volumes?key=${this.apiKey}`
//     this.searchTerms = searchProperties.searchTerms
//       // Re: next line: Without '|| 0', searchStartingID === undefined when searchProperties.searchStartingID = 0
//     this.searchStartingID = searchProperties.searchStartingID || 0
//     this.resultsPerSearch = searchProperties.resultsPerSearch
//   }
//
//   search() {
//     let url = this.baseURL + "&q=" + this.searchTerms + "&startIndex=" + this.searchStartingID + "&maxResults=" + this.resultsPerSearch
//
//     return fetch(url)
//       .then(response => response.json())
//       .then(response => {
//         debugger
//         // problem is I don't get the error message until I turn to json.  So maybe check for
//         // error above, and then get message through converting response json.  Just have to convert it again below.
//         if (response.error) {
//           let message = response.error.errors[0].message + "//" + response.error.errors[0].reason // console.log this.
//           throw new Error(message)
//         } else {
//           return response
//         }
//       })
//     }
// }



// THIS IS A START BUT LEAVES THE PROMISE PERFORMED BY newSearch.search() unresolved.

// export function getBookRecords(searchProperties) {
//
//   return function(dispatch) {
//
//     let newSearch = new FetchRequestBasicSearch(searchProperties)
//
//     return new Promise(newSearch.search().bind(newSearch))
//     .then(response => {
//       if (response.totalItems.length === 0) {
//         throw new Error("Sorry, there were no results. Please try another search.")
//       }
//       dispatch(endBookAPIRequest())
//       dispatch(loadResultNumber(response.totalItems))
//       let bookRecordsForState = createBookRecords(response.items) // argument is an array
//       dispatch(loadSearchResults(bookRecordsForState))
//     })
//     .catch(error => {
//       dispatch(endBookAPIRequest())
//       dispatch(loadError(error.message))
//     })
//   }
// }
//
// // PRIVATE FUNCTIONS
//
// class FetchRequestBasicSearch {
//
//   constructor(searchProperties) {
//     this.apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
//     this.baseURL = `https://www.googleapis.com/books/v1/volumes?key=${this.apiKey}`
//     this.searchTerms = searchProperties.searchTerms
//       // Re: next line: Without '|| 0', searchStartingID === undefined when searchProperties.searchStartingID = 0
//     this.searchStartingID = searchProperties.searchStartingID || 0
//     this.resultsPerSearch = searchProperties.resultsPerSearch
//   }
//
//   search() {
//     return function() {
//       let url = this.baseURL + "&q=" + this.searchTerms + "&startIndex=" + this.searchStartingID + "&maxResults=" + this.resultsPerSearch
//
//     fetch(url)
//       .then(response => response.json())
//       .then(response => {
//         debugger
//         // problem is I don't get the error message until I turn to json.  So maybe check for
//         // error above, and then get message through converting response json.  Just have to convert it again below.
//         if (response.error) {
//           let message = response.error.errors[0].message + "//" + response.error.errors[0].reason // console.log this.
//           throw new Error(message)
//         } else {
//           return response
//         }
//       })
//     }
//   }
// }
//









// WORKS
//
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
