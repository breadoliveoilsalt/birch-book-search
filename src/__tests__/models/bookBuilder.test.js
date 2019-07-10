import { expect } from 'chai'
import BookBuilder from '../../models/bookBuilder'
import Book from '../../models/book'

describe("BookBuilder class", function() {

  let mockBookBuilder
  beforeEach(function(){
    mockBookBuilder = new BookBuilder()
  })

  describe("#setImageURL", function() {
    it("sets the BookBuilder instance's imageURL property to the argument passed in", function() {
      const url = "http://someimage.com"
      mockBookBuilder.setImageURL(url)
      expect(mockBookBuilder.imageURL).to.equal(url)
    })
  })

  describe("#setTitle", function() {
    it("sets the BookBuilder instance's title property to the argument passed in", function() {
      const title = "A Good Book"
      mockBookBuilder.setTitle(title)
      expect(mockBookBuilder.title).to.equal(title)
    })
  })

  describe("#setAuthors", function() {
    it("sets the BookBuilder instance's authors property to the argument passed in", function() {
      const authors = "Stephen King"
      mockBookBuilder.setAuthors(authors)
      expect(mockBookBuilder.authors).to.equal(authors)
    })
  })

  describe("#setPublisher", function() {
    it("sets the BookBuilder instance's publisher property to the argument passed in", function() {
      const publisher = "Random House"
      mockBookBuilder.setPublisher(publisher)
      expect(mockBookBuilder.publisher).to.equal(publisher)
    })
  })

  describe("#setAdditionalInfoURL", function() {
    it("sets the BookBuilder instance's additionalInfoURL property to the argument passed in", function() {
      const additionalInfoURL = "http://moreinfo.com"
      mockBookBuilder.setAdditionalInfoURL(additionalInfoURL)
      expect(mockBookBuilder.additionalInfoURL).to.equal(additionalInfoURL)
    })
  })

  describe("#build", function (){
    it("returns a new instance of a book with the properties of the BookBuilder instance", function() {

      mockBookBuilder.setTitle("A Good Book").setAuthors("Tim Bricker")

      let book = mockBookBuilder.build()

      expect(book instanceof Book).to.be.true
      expect(book.title).to.equal("A Good Book")
      expect(book.authors).to.equal("Tim Bricker")
    })
  })
})
