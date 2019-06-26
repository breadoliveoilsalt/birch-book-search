import React from 'react'
import ReactDOM from 'react-dom'

Enzyme.configure({ adapter: new Adapter() })
import { Provider } from 'react-redux'
import configureStore from '../../configureStore'

import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../../App'
import { BrowserRouter } from 'react-router-dom'

import Header from '../../components_presentational/Header'
import NavBar from '../../components_presentational/NavBar'
import SearchLayoutAndLogic from '../../components_container/SearchLayoutAndLogic'
import AboutPage from '../../components_presentational/AboutPage'

describe("<App />", function() {

  it("renders, connected to the Redux store, without crashing", () => {

    let store = configureStore()

    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}> <App /> </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it("renders the BrowserRouter, Header, NavBar, SearchLayoutAndLogic, and AboutPage Components", function() {

    let wrapper = shallow(<App />)

    expect(wrapper.find(BrowserRouter)).to.exist
    expect(wrapper.find(Header)).to.exist
    expect(wrapper.find(NavBar)).to.exist
    expect(wrapper.find(SearchLayoutAndLogic)).to.exist
    expect(wrapper.find(AboutPage)).to.exist
    
  })

})
