import 'isomorphic-fetch'
import Book from '../models/book'

class FetchRequest {

  constructor(searchProperties) {
    this.fetch = fetch
    this.searchTerms = searchProperties.searchTerms || null
  }

}

export class GoogleBooksAPIRequest extends FetchRequest {

  constructor(searchProperties) {
    super(searchProperties)
    this.apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
    this.searchStartingID = searchProperties.searchStartingID || 0
    this.resultsPerSearch = searchProperties.resultsPerSearch || 20
  }

  basicSearchWithAPIKey() {

    const baseURL = `https://www.googleapis.com/books/v1/volumes?key=${this.apiKey}`

    const url = baseURL + "&q=" + this.searchTerms + "&startIndex=" + this.searchStartingID + "&maxResults=" + this.resultsPerSearch

    const fetch = this.fetch

    return function() {
      return fetch(url)
        .then(response => {
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
        .then(data => {
          let booksSeedData = _parseAndValidateBookData(data)
          let bookObjects = _buildBooks(booksSeedData)
          return {resultsNumber: data.totalItems, books: bookObjects}
        })
        .catch(object => object)
    }

    function _parseAndValidateBookData(data) {
      let booksSeedData = []

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

        booksSeedData.push(bookData)

      })

      return booksSeedData

    }

    function _buildBooks(bookData) {
      return bookData.map( record => {
        return new BookBuilder()
          .setImageURL(record.imageURL)
          .setTitle(record.title)
          .setAuthors(record.authors)
          .setPublisher(record.publisher)
          .setAdditionalInfoURL(record.additionalInfoURL)
          .build()
      })
    }

  }
}

class BookBuilder {

  constructor() {}

  setImageURL(url) {
    this.imageURL = url
    return this
  }

  setTitle(title) {
    this.title = title
    return this
  }

  setAuthors(authors) {
    this.authors = authors
    return this
  }

  setPublisher(publisher) {
    this.publisher = publisher
    return this
  }

  setAdditionalInfoURL(url) {
    this.additionalInfoURL = url
    return this
  }

  build() {
    return new Book(this)
  }

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
