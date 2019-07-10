import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import BookRecord from '../../components_presentational/BookRecord'

describe("<BookRecord />", function() {

  it("should render a book image if props.imgageURL provides an image", function() {

    const bookInfo1 = {
      imageURL: "http://books.google.com/books/content?id=oxL9vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "Data Flow Diagrams - Simply Put!",
      authors: "Thomas Hathaway & Angela Hathaway",
      publisher: null,
      additionalInfoURL: "http://books.google.com/books?id=oxL9vQAACAAJ&dq=DFD&hl=&source=gbs_api"
    }

    const wrapper1 = shallow(<BookRecord bookInfo={bookInfo1} />)

    expect(wrapper1.exists("img")).to.be.true

  })

  it("should render a message that an image is not available if imgageURL is null", function() {

    const bookInfo2 = {
      imageURL: null,
      title: "Data Flow Diagrams - Simply Put!",
      authors: "Thomas Hathaway & Angela Hathaway",
      publisher: null,
      additionalInfoURL: "http://books.google.com/books?id=oxL9vQAACAAJ&dq=DFD&hl=&source=gbs_api"
    }

    const wrapper2 = shallow(<BookRecord bookInfo={bookInfo2} />)

    expect(wrapper2.exists("img")).to.be.false
    expect(wrapper2.text()).to.include("(No image Available)")

  })

  it("should render a book title if props.title provides a title", function() {

    const bookInfo1 = {
      imageURL: "http://books.google.com/books/content?id=oxL9vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "Data Flow Diagrams - Simply Put!",
      authors: "Thomas Hathaway & Angela Hathaway",
      publisher: null,
      additionalInfoURL: "http://books.google.com/books?id=oxL9vQAACAAJ&dq=DFD&hl=&source=gbs_api"
    }

    const wrapper1 = shallow(<BookRecord bookInfo={bookInfo1} />)

    expect(wrapper1.text()).to.include(`Title:  ${bookInfo1.title}`)

  })

  it("should render a message that the book title is not available if props.title is null", function() {

    const bookInfo2 = {
      imageURL: null,
      title: null,
      authors: "Thomas Hathaway & Angela Hathaway",
      publisher: null,
      additionalInfoURL: "http://books.google.com/books?id=oxL9vQAACAAJ&dq=DFD&hl=&source=gbs_api"
    }

    const wrapper2 = shallow(<BookRecord bookInfo={bookInfo2} />)

    expect(wrapper2.text()).to.include("Title:  Not Available")

  })

  it("should display the book's authors if props.authors provides one or more authors", function() {

    const bookInfo1 = {
      imageURL: "http://books.google.com/books/content?id=oxL9vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "Data Flow Diagrams - Simply Put!",
      authors: "Thomas Hathaway & Angela Hathaway",
      publisher: null,
      additionalInfoURL: "http://books.google.com/books?id=oxL9vQAACAAJ&dq=DFD&hl=&source=gbs_api"
    }

    const wrapper1 = shallow(<BookRecord bookInfo={bookInfo1} />)

    expect(wrapper1.text()).to.include(`Author(s):  ${bookInfo1.authors}`)

  })

  it("should render a message that the book's author is not available if props.authors is null", function() {

    const bookInfo2 = {
      imageURL: "http://books.google.com/books/content?id=oxL9vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "Data Flow Diagrams - Simply Put!",
      authors: null,
      publisher: null,
      additionalInfoURL: "http://books.google.com/books?id=oxL9vQAACAAJ&dq=DFD&hl=&source=gbs_api"
    }

    const wrapper2 = shallow(<BookRecord bookInfo={bookInfo2} />)

    expect(wrapper2.text()).to.include("Author(s):  Not Available")

  })

  it("should display the book's publisher if props.publisher provides one", function() {

    const bookInfo1 = {
      imageURL: "http://books.google.com/books/content?id=oxL9vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "Data Flow Diagrams - Simply Put!",
      authors: "Thomas Hathaway & Angela Hathaway",
      publisher: "Random House",
      additionalInfoURL: "http://books.google.com/books?id=oxL9vQAACAAJ&dq=DFD&hl=&source=gbs_api"
    }

    const wrapper1 = shallow(<BookRecord bookInfo={bookInfo1} />)

    expect(wrapper1.text()).to.include(`Publisher:  ${bookInfo1.publisher}`)

  })

  it("should render a message that the book's publisher is not available if props.publisher is null", function() {

    const bookInfo2 = {
      imageURL: "http://books.google.com/books/content?id=oxL9vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "Data Flow Diagrams - Simply Put!",
      authors: "A Bunch of People",
      publisher: null,
      additionalInfoURL: "http://books.google.com/books?id=oxL9vQAACAAJ&dq=DFD&hl=&source=gbs_api"
    }

    const wrapper2 = shallow(<BookRecord bookInfo={bookInfo2} />)

    expect(wrapper2.text()).to.include("Publisher:  Not Available")

  })

  it("should provide a link to an external resource for futher information if props.additionalInfoURL provides a link", function() {

    const bookInfo1 = {
      imageURL: "http://books.google.com/books/content?id=oxL9vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "Data Flow Diagrams - Simply Put!",
      authors: "Thomas Hathaway & Angela Hathaway",
      publisher: "Random House",
      additionalInfoURL: "http://books.google.com/books?id=oxL9vQAACAAJ&dq=DFD&hl=&source=gbs_api"
    }

    const wrapper1 = shallow(<BookRecord bookInfo={bookInfo1} />)

    expect(wrapper1.exists("a")).to.be.true
    expect(wrapper1.find("a").text()).to.equal("Click herefor more info!")

  })

  it("should not render a message that additional information is available if props.additionalInfoURL is null", function() {

    const bookInfo2 = {
      imageURL: "http://books.google.com/books/content?id=oxL9vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "Data Flow Diagrams - Simply Put!",
      authors: "A Bunch of People",
      publisher: "Publish Co.",
      additionalInfoURL: null
    }

    const wrapper2 = shallow(<BookRecord bookInfo={bookInfo2} />)

    expect(wrapper2.exists("a")).to.be.false
    expect(wrapper2.text()).to.not.include("Click herefor more info!")

  })

})
