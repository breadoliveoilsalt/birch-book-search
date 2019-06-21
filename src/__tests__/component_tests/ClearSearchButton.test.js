import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() })

import ClearSearchButton from '../../components_presentational/ClearSearchButton'

describe("<ClearSearchButton />", function() {

  it("renders a button within a form", function(){

    const wrapper = shallow(<ClearSearchButton />)

    expect(wrapper.exists("form input[type='submit']")).to.be.true
  })

  it("clicking the button submits the form that calls the function passed via props", function(){

      const clearSearchSpy = sinon.spy()
      const wrapper = shallow(<ClearSearchButton clearSearch={clearSearchSpy}/>)

      wrapper.find("form").simulate("submit")

      expect(clearSearchSpy.calledOnce).to.be.true

  })

})
