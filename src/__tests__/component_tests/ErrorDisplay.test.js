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

  it("should not render when props.errorMessage is null", function(){
    const wrapper = shallow(<ErrorDisplay errorMessage={null} />)
    expect(wrapper.isEmptyRender()).to.be.true
  })

  it("should render when props.errorMessage is not null", function(){
    const wrapper = shallow(<ErrorDisplay errorMessage={"Big Error"} />)
    expect(wrapper.isEmptyRender()).to.be.false
  })

  it("should dislay props.errorMessage when it is not null", function(){
    let error = "Big Error"
    const wrapper = shallow(<ErrorDisplay errorMessage={error} />)
    expect(wrapper.text()).to.include(error)
  })

})
