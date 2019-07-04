import React from 'react'
import ReactDOM from 'react-dom'

Enzyme.configure({ adapter: new Adapter() })
import { Provider } from 'react-redux'
import configureStore from '../../configureStore'

import { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../../App'
import { BrowserRouter, Route, Switch, MemoryRouter } from 'react-router-dom'

import Header from '../../components_presentational/Header'
import NavBar from '../../components_presentational/NavBar'
import SearchLayoutAndLogic from '../../components_container/SearchLayoutAndLogic'
import AboutPage from '../../components_presentational/AboutPage'
import PageNotFound from '../../components_presentational/PageNotFound'

// const BrowserRouter = ({children}) => <div>{children}</div>

describe("<App />", function() {

  it("renders, connected to the Redux store, without crashing", () => {

    let store = configureStore()

    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}> <App /> </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  describe("<App />'s children without regard to route: ", function() {

    let wrapper

    beforeEach(function() {
      wrapper = shallow(<App />)
    })

    it("renders the BrowserRouter, Header, NavBar, and Switch Components", function() {

      expect(wrapper.find(BrowserRouter).exists()).to.be.true
      expect(wrapper.find(Header)).to.exist
      expect(wrapper.find(NavBar)).to.exist
      expect(wrapper.find(Switch)).to.exist
    })

    it("renders one <div> with the className 'app-container'", function() {

      expect(wrapper.find("div")).to.have.lengthOf(1)
      let div = wrapper.find("div").get(0)
      expect(div.props.className).to.equal("app-container")

    })

    it("renders three Route components under the Switch Component", function(){
      expect(wrapper.find(Route)).to.have.lengthOf(3)
    })

  })

  describe("<App />'s children depeding on the route: ", function(){

    // let store = configureStore()
    //
    // beforeEach(function() {
    //   wrapper = mount(
    //     <Provider store={store} >
    //       <MemoryRouter initialEntries={[ '/' ]}>
    //         <App />
    //       </MemoryRouter>
    //     </ Provider>
    //   )
    // })

    it("renders only the SearchLayoutAndLogic component when the route is '/'", function(){

      let store = configureStore()

      const wrapper = mount(
        <Provider store={store} >
          <MemoryRouter exact initialEntries={[ '/' ]}>
            <App />
          </MemoryRouter>
        </ Provider>
      )

      expect(wrapper.find(SearchLayoutAndLogic)).to.have.lengthOf(1)
      expect(wrapper.find(AboutPage)).to.have.lengthOf(0)
      expect(wrapper.find(PageNotFound)).to.have.lengthOf(0)
    })

    it("renders only the AboutPage component when the route is '/about'", function(){

      console.log(BrowserRouter)

      let store = configureStore()

      const wrapper = mount(
        <Provider store={store} >
          <MemoryRouter exact initialEntries={[ '/xcx' ]} initialIndex={1}>
            <App />
          </MemoryRouter>
        </ Provider>
      )

      expect(wrapper.find(SearchLayoutAndLogic)).to.have.lengthOf(0)
      expect(wrapper.find(AboutPage)).to.have.lengthOf(0)
      expect(wrapper.find(PageNotFound)).to.have.lengthOf(0)
    })


  })
})
