import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import LoadMoreResultsButton from '../../components_presentational/LoadMoreResultsButton'

let wrapper
let handleLoadMoreResultsSpy = sinon.spy()

beforeEach(function(){
  wrapper = shallow(<LoadMoreResultsButton handleLoadMoreResults={handleLoadMoreResultsSpy}/>)
})

describe("<LoadMoreResultsButton />", function() {

  it("should render an input of type 'submit'", function(){
    expect(wrapper.find("input[type='submit']")).to.have.lengthOf(1)
  })

  describe("The input of type 'submit'", function() {

    it("should have a value equal to 'Load More Results'", function(){
      expect(wrapper.find("input[type='submit']").props().value).to.equal("Load More Results")
    })

    it("should call props.handleLoadMoreResults when clicked'", function(){
      wrapper.find("input[type='submit']").simulate("click")
      expect(handleLoadMoreResultsSpy.calledOnce).to.be.true
    })

  })

})
