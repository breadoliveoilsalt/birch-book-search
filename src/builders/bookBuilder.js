import Book from '../models/book'

class BookBuilder {

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

export default BookBuilder
