import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() })

import ClearSearchButton from '../../components_presentational/ClearSearchButton'

describe("<ClearSearchButton />", function() {

  it("renders an input tag of type submit", function(){

    const wrapper = shallow(<ClearSearchButton />)
    expect(wrapper.find("input[type='submit']")).to.have.lengthOf(1)

  })

  it("calls the function passed via props.handleClearSearch when clicked", function(){

      const handleClearSearchSpy = sinon.spy()
      const wrapper = shallow(<ClearSearchButton handleClearSearch={handleClearSearchSpy}/>)
      wrapper.find("input").simulate("click")
      expect(handleClearSearchSpy.calledOnce).to.be.true

  })

})
