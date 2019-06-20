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

  it("should display a book title if one is specified in the relevant Redux object", function() {

  })

  it("should display the book's author title if one is specified in the relevant Redux object", function() {

  })

  it("should display the book's publisher if one is specified in the relevant Redux object", function() {

  })

  it("should provide a link to an external resource for futher informatoin if one is specified in the relevant Redux object", function() {

  })

})
