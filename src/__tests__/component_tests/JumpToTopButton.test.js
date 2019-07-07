import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import JumpToTopButton from '../../components_presentational/JumpToTopButton'

describe("<JumpToTopButton />", function() {

  it("should render nothing when props.resultsNumber is less-than or equal-to 0", function(){
    const wrapper = shallow(<JumpToTopButton resultsNumber={0} />)
    expect(wrapper.isEmptyRender()).to.be.true
  })

  describe("when props.resultsNumber is greater than 0", function() {

    it("should render an input of type 'submit'", function(){
      const wrapper = shallow(<JumpToTopButton resultsNumber={1} />)
      expect(wrapper.find("input[type='submit']")).to.have.lengthOf(1)
    })

    describe("The input of type 'submit'", function(){
      it("should have an id equal to 'jump-to-top-button'", function(){

      })

      // UP TO HERE
    })

  // it("should have a class name 'error-display'", function() {
  //   const wrapper = shallow(<ErrorDisplay errorMessage={"Something went wrong."}/>)
  //   expect(wrapper.hasClass("error-display")).to.be.true
  // })
  // it("should render when props.errorMessage is not null", function(){
  //   const wrapper = shallow(<ErrorDisplay errorMessage={"Big Error"} />)
  //   expect(wrapper.isEmptyRender()).to.be.false
  // })
  //
  // it("should dislay props.errorMessage when it is not null", function(){
  //   let error = "Big Error"
  //   const wrapper = shallow(<ErrorDisplay errorMessage={error} />)
  //   expect(wrapper.text()).to.include(error)
  // })

  })
})
