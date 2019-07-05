import React from 'react'

import { Provider } from 'react-redux'
import configureStore from '../../configureStore'
import { MemoryRouter, Switch, Route } from 'react-router-dom'

import { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Routes from '../../components_presentational/Routes'
import SearchLayoutAndLogic from '../../components_container/SearchLayoutAndLogic'
import AboutPage from '../../components_presentational/AboutPage'
import PageNotFound from '../../components_presentational/PageNotFound'

Enzyme.configure({ adapter: new Adapter() })

describe("<Routes />", function() {

  it("renders the Switch Component", function(){

    const wrapper = shallow(<Routes />)
    expect(wrapper.find(Switch)).to.have.lengthOf(1)

  })

  it("renders the Switch component with three Route components on a shallow render", function() {

    const wrapper = shallow(<Routes />)
    expect(wrapper.find(Route)).to.have.lengthOf(3)
    expect(wrapper.find(Switch).children()).to.have.lengthOf(3)
    expect(wrapper.find(Switch).childAt(0).type()).to.equal(Route)
    expect(wrapper.find(Switch).childAt(1).type()).to.equal(Route)
    expect(wrapper.find(Switch).childAt(2).type()).to.equal(Route)

  })

  it("renders only the SearchLayoutAndLogic component when the route is '/'", function(){

    let store = configureStore()

    const wrapper = mount(
      <Provider store={store} >
        <MemoryRouter exact initialEntries={[ '/' ]}>
          <Routes />
        </MemoryRouter>
      </ Provider>
    )

    expect(wrapper.find(SearchLayoutAndLogic)).to.have.lengthOf(1)
    expect(wrapper.find(AboutPage)).to.have.lengthOf(0)
    expect(wrapper.find(PageNotFound)).to.have.lengthOf(0)

  })

  it("renders only the AboutPage component when the route is '/about'", function(){

    let store = configureStore()

    const wrapper = mount(
      <Provider store={store} >
        <MemoryRouter exact initialEntries={[ '/about' ]} >
          <Routes />
        </MemoryRouter>
      </ Provider>
    )

    expect(wrapper.find(SearchLayoutAndLogic)).to.have.lengthOf(0)
    expect(wrapper.find(AboutPage)).to.have.lengthOf(1)
    expect(wrapper.find(PageNotFound)).to.have.lengthOf(0)

  })

  it("renders the PageNotFound component when the route is neither '/' nor '/about'", function(){

    let store = configureStore()

    const wrapper = mount(
      <Provider store={store} >
        <MemoryRouter exact initialEntries={[ '/about123' ]} >
          <Routes />
        </MemoryRouter>
      </ Provider>
    )

    expect(wrapper.find(SearchLayoutAndLogic)).to.have.lengthOf(0)
    expect(wrapper.find(AboutPage)).to.have.lengthOf(0)
    expect(wrapper.find(PageNotFound)).to.have.lengthOf(1)
    
  })
})
