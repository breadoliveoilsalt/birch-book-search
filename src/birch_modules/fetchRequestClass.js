import 'isomorphic-fetch'
import Book from '../models/book'

class FetchRequest {

  constructor(searchProperties) {
    this.fetch = fetch
    this.searchTerms = searchProperties.searchTerms //|| null
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
          let resultsNumberStatus = _checkDataForResultsNumber(data)
          if (resultsNumberStatus.error) {
            throw resultsNumberStatus
          } else {
            return data
          }
        })
        // .then(data => {
        //    return {resultsNumber: data.totalItems, books: []}
        // })
        .then(data => {
          let bookData = _parseAndValidateBookData(data)
          // debugger
          let bookObjects = _buildBooks(bookData)
          return {resultsNumber: data.totalItems, books: bookObjects}

          // let parsedData = _parseData(data)
          // return parsedData
        })
        .catch(object => object)
    }
    //
    // function _parseData(data) {
    //   let parsedData = {}
    //   parsedData.resultsNumber = data.totalItems
    //   parsedData.books = _organizeBookData(data)
    //   return parsedData
    // }

    function _parseAndValidateBookData(data) {
      let books = []

      data.items.forEach( record => {
        let bookData = {}
        let baseInfo = record.volumeInfo

        try {
          bookData.imageURL = baseInfo.imageLinks.thumbnail
        } catch {
          bookData.imageURL = null
        }

        try {
          bookData.title = baseInfo.title
        } catch {
          bookData.title = null
        }

        try {
          let authorsString = baseInfo.authors[0]
          for (let i = 1; i < baseInfo.authors.length; i++) {
            authorsString += ` & ${baseInfo.authors[i]}`
          }
          bookData.authors = authorsString
        } catch {
          bookData.authors = null
        }

        try {
          bookData.publisher = baseInfo.publisher
        } catch {
          bookData.publisher = null
        }

        try {
          bookData.additionalInfoURL = baseInfo.infoLink
        } catch {
          bookData.additionalInfoURL = null
        }

        books.push(bookData)

      })

      return books

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

    function _buildBooks(bookData) {
      let bookObjects = []
      // bookData is ok
      // debugger
      bookData.forEach( record => {
        // debugger
        // try{
          let book = new BookBuilder()
            .setImageURL(record.imageURL)
            .setTitle(record.title)
            .setAuthors(record.authors)
            .setPublisher(record.publisher)
            .setAdditionalInfoURL(record.additionalInfoURL)
            .build()
          // debugger
          bookObjects.push(book)
        // } catch(error) {console.warn(error)}
      })
      return bookObjects
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
    // // debugger
    // try {
      this.imageURL = url
    // } catch {
    //   this.imageURL = null
    // }
    return this
  }

  setTitle(title) {
    // debugger
    // try {
      this.title = title
    // } catch {
    //   this.title = null
    // }
    // debugger
    return this
  }

  setAuthors(authors) {
    // debugger
    // try {
    //   let authorsString = authors[0]
    //   for (let i = 1; i < authors.length; i++) {
    //     authorsString += ` & ${authors[i]}`
    //   }
    //   this.authors = authorsString
    // } catch {
    //   this.authors = null
    // }
    this.authors = authors
    return this
  }

  setPublisher(publisher) {
    // debugger
    // try {
      this.publisher = publisher
    // } catch {
    //   this.publisher = null
    // }
    return this
  }

  setAdditionalInfoURL(url) {
    // debugger
    // try {
      this.additionalInfoURL = url
    // } catch {
      // this.additionalInfoURL = null
    // }
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

function _checkDataForResultsNumber(data) {
  let resultsNumberStatus = {error: false}
  if (!data.hasOwnProperty("totalItems") || data.totalItems === 0){
    resultsNumberStatus.error = true
    resultsNumberStatus.message = "Sorry, there were no results. Please try another search."
  }
  return resultsNumberStatus
}
