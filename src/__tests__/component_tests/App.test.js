import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from '../../configureStore'
import { BrowserRouter } from 'react-router-dom'

import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../../App'
import Header from '../../components_presentational/Header'
import NavBar from '../../components_presentational/NavBar'
import Routes from '../../components_presentational/Routes'

Enzyme.configure({ adapter: new Adapter() })

describe("<App />", function() {

  it("renders, connected to the Redux store, without crashing", () => {

    let store = configureStore()

    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}> <App /> </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  describe("<App />'s children: ", function() {

    let wrapper

    beforeEach(function() {
      wrapper = shallow(<App />)
    })

    it("renders the BrowserRouter, Header, NavBar, and Route Components", function() {

      expect(wrapper.find(BrowserRouter).exists()).to.be.true
      expect(wrapper.find(Header)).to.exist
      expect(wrapper.find(NavBar)).to.exist
      expect(wrapper.find(Routes)).to.exist
    })

    it("renders one <div> with the className 'app-container'", function() {

      expect(wrapper.find("div")).to.have.lengthOf(1)
      let div = wrapper.find("div").get(0)
      expect(div.props.className).to.equal("app-container")

    })

  })
})
