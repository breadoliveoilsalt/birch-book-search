import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import PageNotFound from '../../components_presentational/PageNotFound'

let wrapper

beforeEach(function(){
  wrapper = shallow(<PageNotFound />)
})

describe("<PageNotFound />", function() {

  it("renders a div with a className of 'info-page'", function(){
    expect(wrapper.find("div.info-page")).to.have.lengthOf(1)
  })

  it("renders text indicating the page does not exist and directing the user to use the links in the navbar", function(){

    const expectedText = "Sorry, the page you were looking for does not exist.  Please use one of the links above to navigage to another page."

    expect(wrapper.text()).to.include(expectedText)
  })
})
