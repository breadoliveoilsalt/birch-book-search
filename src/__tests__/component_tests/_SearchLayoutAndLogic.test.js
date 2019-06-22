import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from '../../configureStore'
import SearchLayoutAndLogic from '../../components_container/SearchLayoutAndLogic'

import { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })


it('renders without crashing', () => {

  let store = configureStore()

  const div = document.createElement('div')

  let wrapper = mount(<Provider store={store}> <SearchLayoutAndLogic /> </Provider>)

  console.log(wrapper.debug())
  // ReactDOM.render(<Provider store={store}> <SearchLayoutAndLogic /> </Provider>, div)
  //
  //
  // ReactDOM.unmountComponentAtNode(div);
});
//
// it('renders without crashing', () => {
//
//   let store = configureStore()
//
//   const div = document.createElement('div')
//   ReactDOM.render(<Provider store={store}> <SearchLayoutAndLogic /> </Provider>, div)
//
//
//   ReactDOM.unmountComponentAtNode(div);
// });
