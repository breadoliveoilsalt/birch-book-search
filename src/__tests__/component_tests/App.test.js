import React from 'react'
import ReactDOM from 'react-dom'

Enzyme.configure({ adapter: new Adapter() })
import { Provider } from 'react-redux'
import configureStore from '../../configureStore'

import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../../App'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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

  describe("<App /> renders children", function() {

    let wrapper

    beforeEach(function() {
      wrapper = shallow(<App />)
    })

    it("It renders the BrowserRouter, Header, NavBar, and Switch Components", function() {

      expect(wrapper.find(BrowserRouter).exists()).to.be.true
      expect(wrapper.find(Header)).to.exist
      expect(wrapper.find(NavBar)).to.exist
      expect(wrapper.find(Switch)).to.exist
    })

    it("It renders one <div> with the className 'app-container'", function() {

      expect(wrapper.find("div")).to.have.lengthOf(1)
      let div = wrapper.find("div").get(0)
      expect(div.props.className).to.equal("app-container")

    })


  })
})
