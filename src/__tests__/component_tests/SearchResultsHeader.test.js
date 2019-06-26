import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import SearchResultsHeader from '../../components_presentational/SearchResultsHeader'

describe("<SearchResultsHeader />", function() {

  it("should not render when prop.resultNumber is 0", function() {

    const wrapper = shallow(<SearchResultsHeader resultNumber={0}/>)
    expect(wrapper.isEmptyRender()).to.be.true

  })

  it("should render when prop.resultNumber is greater than 0", function() {

    const wrapper = shallow(<SearchResultsHeader resultNumber={15}/>)
    expect(wrapper.isEmptyRender()).to.be.false

  })

  it("should render text indicating how many results returned", function() {

    const wrapper = shallow(<SearchResultsHeader resultNumber={15}/>)
    expect(wrapper.text()).to.include("15 potential result(s)")

  })

})
