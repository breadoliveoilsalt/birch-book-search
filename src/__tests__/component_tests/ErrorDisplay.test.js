import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import ErrorDisplay from '../../components_presentational/ErrorDisplay'


describe("<ErrorDisplay />", function() {

  it("should have a class name 'error-display'", function() {
    const wrapper = shallow(<ErrorDisplay errorMessage={"Something went wrong."}/>)
    expect(wrapper.hasClass("error-display")).to.be.true
  })

  it("should not render when the errorMessage props is null", function(){
    const wrapper = shallow(<ErrorDisplay errorMessage={null} />)
    expect(wrapper.isEmptyRender()).to.be.true
  })

  it("should render when the errorMessage props is a string", function(){
    const wrapper = shallow(<ErrorDisplay errorMessage={"Big Error"} />)
    expect(wrapper.isEmptyRender()).to.be.false
  })

  it("should dislay the errorMessage passed as a prop", function(){
    let error = "Big Error"
    const wrapper = shallow(<ErrorDisplay errorMessage={error} />)
    expect(wrapper.text()).to.include(error)
  })

})
