import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import Loader from '../../components_presentational/Loader'

let wrapper

beforeEach(function(){
  wrapper = shallow(<Loader />)
})

describe("<Loader />", function() {

  it("renders a div with a className equal to 'loader'", function() {
    expect(wrapper.find("div.loader")).to.have.lengthOf(1)
  })

})
