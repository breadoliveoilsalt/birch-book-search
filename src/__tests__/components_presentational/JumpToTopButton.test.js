import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
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

    let wrapper
    let jumpToTopSpy = sinon.spy()

    beforeEach(function() {
      wrapper = shallow(<JumpToTopButton resultsNumber={1} jumpToTop={jumpToTopSpy}/>)
    })

    it("should render an input of type 'submit'", function(){
      expect(wrapper.find("input[type='submit']")).to.have.lengthOf(1)
    })

    describe("The input of type 'submit'", function(){

      it("should have an id equal to 'jump-to-top-button'", function(){
        expect(wrapper.find("input[type='submit']").props().id).to.equal("jump-to-top-button")
      })

      it("should have a value equal to 'Jump To Top'", function(){
        expect(wrapper.find("input[type='submit']").props().value).to.equal("Jump To Top")
      })

      it("should call props.jumpToTop when clicked'", function(){
        wrapper.find("input[type='submit']").simulate("click")
        expect(jumpToTopSpy.calledOnce).to.be.true
      })

    })
  })
})
