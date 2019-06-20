import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import BookRecord from '../components_container/BookRecord'

describe("<BookRecord />", function() {

  it("should render a book image if one is specified in the relevant props object", function() {

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
