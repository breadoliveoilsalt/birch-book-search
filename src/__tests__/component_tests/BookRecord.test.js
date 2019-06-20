import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import BookRecord from '../../components_presentational/BookRecord'

describe("<BookRecord />", function() {

  it("should render a book image only if imgageURL is specified in the relevant props object", function() {

    const bookInfo1 = {
      imageURL: "http://books.google.com/books/content?id=oxL9vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "Data Flow Diagrams - Simply Put!",
      authors: "Thomas Hathaway & Angela Hathaway",
      publisher: null,
      additionalInfoURL: "http://books.google.com/books?id=oxL9vQAACAAJ&dq=DFD&hl=&source=gbs_api"
    }

    const wrapper1 = shallow(<BookRecord bookInfo={bookInfo1} />)

    expect(wrapper1.exists("img")).to.be.true

    /////

    const bookInfo2 = {
      imageURL: null,
      title: "Data Flow Diagrams - Simply Put!",
      authors: "Thomas Hathaway & Angela Hathaway",
      publisher: null,
      additionalInfoURL: "http://books.google.com/books?id=oxL9vQAACAAJ&dq=DFD&hl=&source=gbs_api"
    }

    const wrapper2 = shallow(<BookRecord bookInfo={bookInfo2} />)

    expect(wrapper2.text()).to.include("(No image Available)")
    expect(wrapper2.exists("img")).to.be.false


    })

  it("should indicate a book title only if one is specified in the relevant props object", function() {

    const bookInfo1 = {
      imageURL: "http://books.google.com/books/content?id=oxL9vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "Data Flow Diagrams - Simply Put!",
      authors: "Thomas Hathaway & Angela Hathaway",
      publisher: null,
      additionalInfoURL: "http://books.google.com/books?id=oxL9vQAACAAJ&dq=DFD&hl=&source=gbs_api"
    }

    const wrapper1 = shallow(<BookRecord bookInfo={bookInfo1} />)

    expect(wrapper1.text()).to.include(`Title:  ${bookInfo1.title}`)

    /////

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

  it("should display the book's authors only if one is specified in the relevant props object", function() {

    const bookInfo1 = {
      imageURL: "http://books.google.com/books/content?id=oxL9vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "Data Flow Diagrams - Simply Put!",
      authors: "Thomas Hathaway & Angela Hathaway",
      publisher: null,
      additionalInfoURL: "http://books.google.com/books?id=oxL9vQAACAAJ&dq=DFD&hl=&source=gbs_api"
    }

    const wrapper1 = shallow(<BookRecord bookInfo={bookInfo1} />)

    expect(wrapper1.text()).to.include(`Author(s):  ${bookInfo1.authors}`)

    /////

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

  it("should display the book's publisher only if one is specified in the relevant props object", function() {

    const bookInfo1 = {
      imageURL: "http://books.google.com/books/content?id=oxL9vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "Data Flow Diagrams - Simply Put!",
      authors: "Thomas Hathaway & Angela Hathaway",
      publisher: "Random House",
      additionalInfoURL: "http://books.google.com/books?id=oxL9vQAACAAJ&dq=DFD&hl=&source=gbs_api"
    }

    const wrapper1 = shallow(<BookRecord bookInfo={bookInfo1} />)

    expect(wrapper1.text()).to.include(`Publisher:  ${bookInfo1.publisher}`)

    /////

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

  it("should provide a link to an external resource for futher information only if one is specified in the relevant props object", function() {

    const bookInfo1 = {
      imageURL: "http://books.google.com/books/content?id=oxL9vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "Data Flow Diagrams - Simply Put!",
      authors: "Thomas Hathaway & Angela Hathaway",
      publisher: "Random House",
      additionalInfoURL: "http://books.google.com/books?id=oxL9vQAACAAJ&dq=DFD&hl=&source=gbs_api"
    }

    const wrapper1 = shallow(<BookRecord bookInfo={bookInfo1} />)

    expect(wrapper1.text()).to.include("Click here for more info!")
    expect(wrapper1.exists("a")).to.be.true

    /////

    const bookInfo2 = {
      imageURL: "http://books.google.com/books/content?id=oxL9vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "Data Flow Diagrams - Simply Put!",
      authors: "A Bunch of People",
      publisher: "Publish Co.",
      additionalInfoURL: null
    }

    const wrapper2 = shallow(<BookRecord bookInfo={bookInfo2} />)

    expect(wrapper2.text()).to.not.include("Click here for more info!")
    expect(wrapper2.exists("a")).to.be.false

  })

})
