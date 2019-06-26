import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import Header from '../../components_presentational/Header'

describe("<Header />", function() {
  it("renders the text 'Birch' only", function() {
    const wrapper = shallow(<Header />)
    expect(wrapper.text()).to.equal("Birch")
  })

})
