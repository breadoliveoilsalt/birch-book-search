class Book {

  constructor(builder) {
    this.imageURL = builder.imageURL || null
    this.title = builder.title || null
    this.authors = builder.authors || null
    this.publisher = builder.publisher || null
    this.additionalInfoURL = builder.additionalInfoURL || null
  }
}

export default Book
