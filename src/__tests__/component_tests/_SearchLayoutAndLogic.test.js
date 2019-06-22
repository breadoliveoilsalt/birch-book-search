import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from '../../configureStore'
import SearchLayoutAndLogic from '../../components_container/SearchLayoutAndLogic'

import { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import sinon from 'sinon'


it('renders without crashing', () => {

  let store = configureStore()

  // let wrapperProvider = mount(<Provider store={store}> <SearchLayoutAndLogic /> </Provider>)

  // no idea why this works now.
  let wrapper = mount(<SearchLayoutAndLogic store={store} />)


  console.log(wrapper.instance())
  console.log(wrapper.find(SearchLayoutAndLogic).props())
  console.log(wrapper.find(SearchLayoutAndLogic).render())

  console.log(wrapper.props().loadError)
  let spy = sinon.spy(wrapper.instance())

  console.log(wrapper.props().store)

  console.log(wrapper.find(SearchLayoutAndLogic).render()[0])

  console.log(wrapper.props())


/////////
  // console.log("Props: ", wrapperProvider.props())

  // not work:
  // console.log(wrapperProvider.instance().find(SearchLayoutAndLogic))
  // not vomit but not quite work
  // console.log(wrapperProvider.instance())

  // console.log("Children: ", wrapperProvider.children())

  // let wrapperSearchLayoutAndLogic = wrapperProvider.find(SearchLayoutAndLogic).instance().handleClearSearch
  // let wrapperSearchLayoutAndLogic = wrapperProvider.find(SearchLayoutAndLogic).instance().handleClearSearch

// NOT WORK;

  // let wrapperSearchLayoutAndLogic = wrapperProvider.find(SearchLayoutAndLogic).render().instance()

  // console.log("ReactWrapper :", wrapperSearchLayoutAndLogic)

  // console.log(wrapper.debug())
  // console.log(store.getState())
  // let mockEvent = new Event("submit")
  // console.log(wrapper.instance()) // does something weird -- try find(SearchLayoutAndLogic)

  // const div = document.createElement('div')
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
