import { expect } from 'chai'
import Book from '../../models/book'

describe("Book class", function() {

  it("should return an instance of Book", function() {
    let properties = {title: "A Good Book", author: "A Good Friend"}
    let record = new Book(properties)
    expect(record).to.be.an.instanceof(Book)
  })

  describe("a Book instance", function() {
    it("should have properties only for imageURL, title, authors, publisher, and additionalInfoURL", function() {

      let properties = {
        imageURL: "http://books.google.com/books/content?id=TwkNkgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        title: "Apples",
        authors: ["Gail Gibbons"],
        publisher: "Live Oak Media (NY)",
        additionalInfoURL: "http://books.google.com/books?id=TwkNkgEACAAJ&dq=apples&hl=&source=gbs_api"
      }

      let record = new Book(properties)

      expect(record).to.have.property('imageURL')
      expect(record).to.have.property('title')
      expect(record).to.have.property('authors')
      expect(record).to.have.property('publisher')
      expect(record).to.have.property('additionalInfoURL')

      let numberOfProperties = Object.keys(record).length

      expect(numberOfProperties).to.equal(5)
    })

    it("should have properties with null values when instantiated with an object/hash that does not specifiy such properties", function() {

      let properties1 = {
        imageURL: "http://books.google.com/books/content?id=TwkNkgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        title: "Apples",
        publisher: "Live Oak Media (NY)",
      }

      let record1 = new Book(properties1)

      expect(record1.authors).to.equal(null)
      expect(record1.additionalInfoURL).to.equal(null)

      let properties2 = { }

      let record2 = new Book(properties2)

      expect(record2.imageURL).to.equal(null)
      expect(record2.title).to.equal(null)
      expect(record2.authors).to.equal(null)
      expect(record2.publisher).to.equal(null)
      expect(record2.additionalInfoURL).to.equal(null)
    })
  })
})
