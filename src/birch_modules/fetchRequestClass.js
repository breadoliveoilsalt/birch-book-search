import 'isomorphic-fetch'

class FetchRequest {

  constructor(searchProperties) {
    this.fetch = fetch
    this.searchTerms = searchProperties.searchTerms || null
      // this.apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
      // this.baseURL = `https://www.googleapis.com/books/v1/volumes?key=${this.apiKey}`

        // Re: next line: Without '|| 0', searchStartingID === undefined when searchProperties.searchStartingID = 0
      // this.searchStartingID = searchProperties.searchStartingID || 0
      // this.resultsPerSearch = searchProperties.resultsPerSearch || 20
    }
}

export class GoogleBooksAPIRequest extends FetchRequest {

  constructor(searchProperties) {
    super(searchProperties)
    this.apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
    this.searchStartingID = searchProperties.searchStartingID || 0
    this.resultsPerSearch = searchProperties.resultsPerSearch || 20
    // this.baseURL = `https://www.googleapis.com/books/v1/volumes?key=${this.apiKey}`
  }

  basicSearchWithAPIKey() {

    const baseURL = `https://www.googleapis.com/books/v1/volumes?key=${this.apiKey}`
    const url = baseURL + "&q=" + this.searchTerms + "&startIndex=" + this.searchStartingID + "&maxResults=" + this.resultsPerSearch

    const fetch = this.fetch

    return function() {
      return fetch(url)
        .then(response => {
          let responseStatus = checkResponse(response)
          if (responseStatus.error) {
            throw responseStatus
          } else
            return response.json()
          })
        .then(data => {
          let dataStatus = checkData(data)
          if (dataStatus.error) {
            return dataStatus
          } else {
            let dataToDispatch = formatData(data)
            return dataToDispatch
          }
        })
        .catch(object => object)
    }

    function formatData(data) {
      let dataToDispatch = {}
      dataToDispatch.resultsNumber = data.totalItems
      dataToDispatch.books = [] //buildBooks(data)
      return dataToDispatch
    }



  }

}

///// PRIVATE FUNCTIONS

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
      status.message = "Sorry, there appears to be a data error. Please try again."
    }
  } else if (data.totalItems.length === 0) {
    status.error = true
    status.message = "Sorry, there were no results. Please try another search."
  }

  return status
}

// function createBookRecords(arrayOfAPIReturns) {
//
//   let bookRecordsForState = []
//
//   arrayOfAPIReturns.forEach( bookRecord => {
//     let bookRecordForState = new ModelToReturn(bookRecord.volumeInfo)
//     bookRecordsForState.push(bookRecordForState)
//   })
//
//   return bookRecordsForState
//
// }
