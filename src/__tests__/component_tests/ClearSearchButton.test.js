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

  it("clicking the button calls the function passed via props", function(){

  })


  //
  // it('simulates click events', () => {
  //     const onButtonClick = sinon.spy();
  //     const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
  //     wrapper.find('button').simulate('click');
  //     expect(onButtonClick).to.have.property('callCount', 1);
  //   });
})
