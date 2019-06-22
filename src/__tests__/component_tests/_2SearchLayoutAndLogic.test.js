import React from 'react'
import ReactDOM from 'react-dom'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { expect } from 'chai'
import { Provider } from 'react-redux'

import sinon from 'sinon'

import ConnectedSearchLayoutAndLogic, { SearchLayoutAndLogic } from '../../components_container/SearchLayoutAndLogic'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

import { getBookRecords } from '../../birch_modules/fetchRequestBasicSearch'
import { loadError, deleteError, beginBookAPIRequest, endBookAPIRequest } from '../../birch_modules/actionCreatorsAppStatus'
import { loadSearchTerms, increaseSearchStartingID, loadSearchResults, loadResultNumber, resetSearch } from '../../birch_modules/actionCreatorsUpdateSearchResults'

import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import configureStore from '../../configureStore'

const state = {
      appStatus: {
        makingBookAPIRequest: false,
        currentError: null
      },
      currentSearch:
       { userSearchTerms: null,
         resultsPerSearch: 20,
         searchStartingID: 0,
         results: [],
         resultNumber: 0
       }
     }

it('renders without crashing', () => {

  let store = configureStore()


    // lesson here is really have to keep console.logging stuff and when objects are returned, go deeper into them.
    // let wrapperProvider = mount(<Provider store={store}> <SearchLayoutAndLogic /> </Provider>)

  // const wrapper = shallow(<SearchLayoutAndLogic store={store} />)

  const wrapper = shallow(<ConnectedSearchLayoutAndLogic store={store} />)
  // console.log(wrapper.find(ContextProvider))

  console.log(wrapper.debug())
  console.log(wrapper.instance())
  console.log(wrapper.props())
  console.log(wrapper.props().children.props.loadError)
  console.log(wrapper.props().children.type.props)

})
  // let spy = sinon.spy(wrapper.instance().deleteError())
  // wrapper.instance().deleteError()
  // let event = new Event("submit")
  // // console.log(wrapper.instance().handleClearSearch(event).bind(wrapper.instance()))
  //
  // console.log(wrapper.instance().escapeSearchTerms("  hello "))
  // console.log(wrapper.instance())
  // console.log(wrapper.props())
  //
  //
  // (wrapper.instance().handleClearSearch(event)).bind(wrapper)
  // })


//
//   // lesson here is really have to keep console.logging stuff and when objects are returned, go deeper into them.
//   // let wrapperProvider = mount(<Provider store={store}> <SearchLayoutAndLogic /> </Provider>)
//
//   const wrapper = shallow(<SearchLayoutAndLogic store={store} />)
//
//   console.log(wrapper.instance().escapeSearchTerms("  hello "))
//
//   let event = new Event("submit")
//   wrapper.instance().handleClearSearch(event)
// })

/////
  // no idea why this works now. But I still can't get to the functions. Works when import does not have curly brackets around it.
  // const wrapper = shallow(<SearchLayoutAndLogic store={store} />)

  // wrapper.instance().deleteError()
  // console.log(wrapper.props())
  // console.log(wrapper.props().children.props)
  // console.log(wrapper.props().children.props.deleteError)
  // console.log(wrapper.instance())
  // console.log(wrapper.find(SearchLayoutAndLogic).props())
  // console.log(wrapper.find(SearchLayoutAndLogic).render())
  //
  // console.log(wrapper.props().loadError)
  // // let spy = sinon.spy(wrapper.instance())
  //
  // console.log(wrapper.debug())
  //
  // console.log(wrapper.props())


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
