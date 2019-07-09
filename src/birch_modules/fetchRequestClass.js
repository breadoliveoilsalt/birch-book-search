import 'isomorphic-fetch'
import Book from '../models/book'

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
          // Change to this._checkResponseForErrors since it is specific to this class. Same below
          let responseStatus = _checkResponseForErrors(response)
          if (responseStatus.error) {
            throw responseStatus
          } else
            return response.json()
          })
        .then(data => {
          let dataStatus = _checkDataForErrors(data)
          if (dataStatus.error) {
            throw dataStatus
          } else {
            return data }
          })
        .then(data => {
          let dataResults = _checkDataForResults(data)
          if (dataResults.error) {
            throw dataResults
          } else {
            return data
          }
        })
        // .then(data => {
        //    return {resultsNumber: data.totalItems, books: []}
        // })
        .then(data => {
          let parsedData = _parseData(data)
          return parsedData
        })
        .catch(object => object)
    }

    function _parseData(data) {
      let parsedData = {}
      parsedData.resultsNumber = data.totalItems
      parsedData.books = []
      return parsedData
    }

        //     }
        //     let dataToDispatch = {}
        //     dataToDispatch.resultsNumber = data.totalItems
        //     dataToDispatch.books = []
        //     // let bookData = checkKeys(data)
        //     //
        //     //
        //     //
        //     // let dataToDispatch = formatData(data)
        //     return dataToDispatch
        //   }
        // })


      // Sometimes, data from the Google Books API has missing or inconsistent fields.
      // These result in errors when trying to construct Books using the builder pattern
      // by passing in raw data from the Google Books API.  #checkKeys is intended
      // to avoid these errors.



    // function formatData(data) {
    //   let dataToDispatch = {}
    //   dataToDispatch.resultsNumber = data.totalItems
    //   dataToDispatch.books = buildBooks(data.items)
    //   return dataToDispatch
    // }

    function buildBooks(apiBooksArray) {
      debugger
      let books = []
      apiBooksArray.forEach( record => {
        debugger
        // try{
          let book = new BookBuilder()
            .setImageURL(record.volumeInfo.imageLinks.thumbnail)
            .setTitle(record.volumeInfo.title)
            .setAuthors(record.volumeInfo.authors)
            .setPublisher(record.volumeInfo.publisher)
            .setAdditionalInfoURL(record.volumeInfo.infoLink)
            .build()
          debugger
          books.push(book)
        // } catch(error) {console.warn(error)}
      })
      return books
    }


      // return []

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

  }
}

class BookBuilder {

  constructor() {}

  setImageURL(url) {
    debugger
    try {
      this.imageURL = url
    } catch {
      this.imageURL = null
    }
    return this
  }

  setTitle(title) {
    debugger
    try {
      this.title = title
    } catch {
      this.title = null
    }
    // debugger
    return this
  }

  setAuthors(authors) {
    debugger
    try {
      let authorsString = authors[0]
      for (let i = 1; i < authors.length; i++) {
        authorsString += ` & ${authors[i]}`
      }
      this.authors = authorsString
    } catch {
      this.authors = null
    }
    return this
  }

  setPublisher(publisher) {
    debugger
    try {
      this.publisher = publisher
    } catch {
      this.publisher = null
    }
    return this
  }

  setAdditionalInfoURL(url) {
    debugger
    try {
      this.additionalInfoURL = url
    } catch {
      this.additionalInfoURL = null
    }
    return this
  }

  build() {
    return new Book(this)
  }

  // authorsHelper(authors) {
  //   let authorString = authors[0]
  //   for (let i = 1; i < authors.length; i++) {
  //     authorString += ` & ${authors[i]}`
  //   }
  //   return authorString
  // }

}


///// PRIVATE FUNCTIONS


// Do I need message: null?? console.log so I see this.

function _checkResponseForErrors(response) {

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

function _checkDataForErrors(data) {
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
  }
  // } else if (data.totalItems.length === 0) {
  //   status.error = true
  //   status.message = "Sorry, there were no results. Please try another search."
  // }

  return status
}

function _checkDataForResults(data) {
  let dataResults = {error: false}
  if (!data.hasOwnProperty("totalItems") || data.totalItems === 0){
    dataResults.error = true
    dataResults.message = "Sorry, there were no results. Please try another search."
  }
  return dataResults
}
