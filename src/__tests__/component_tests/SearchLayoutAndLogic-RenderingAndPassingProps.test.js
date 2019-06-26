import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import { SearchLayoutAndLogic } from '../../components_container/SearchLayoutAndLogic'
import SearchBar from '../../components_presentational/SearchBar'
import ClearSearchButton from '../../components_presentational/ClearSearchButton'
import ErrorDisplay from '../../components_presentational/ErrorDisplay'
import SearchResultsList from '../../components_presentational/SearchResultsList'

describe("<SearchLayoutAndLogic /> - Testing Rendering Children and Passing Props to Children", function() {

  it("should render the SearchBar, ClearSearchButton, ErrorDisplay, and SearchResultsList Components", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)

    expect(wrapper.find(SearchBar)).to.exist
    expect(wrapper.find(ClearSearchButton)).to.exist
    expect(wrapper.find(ErrorDisplay)).to.exist
    expect(wrapper.find(SearchResultsList)).to.exist
  })

  it("should have a function #handleClearSearch that is passed to the ClearSearchButton component as a prop", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)
    expect(wrapper.find(ClearSearchButton).props().clearSearch).to.equal(wrapper.instance().handleClearSearch)
  })

  it("should have a function #handleSearchSubmit that is passed to the SearchBar component as a prop", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)
    expect(wrapper.find(SearchBar).props().handleSearchSubmit).to.equal(wrapper.instance().handleSearchSubmit)
  })

  it("should have a function #handleLoadMoreResults that is passed to SearchResultsList component as a prop", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)
    expect(wrapper.find(SearchResultsList).props().handleLoadMoreResults).to.equal(wrapper.instance().handleLoadMoreResults)
  })

  it("should have a function #jumpToTopOfResults that is passed to the SearchResultsList component as a prop", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)
    expect(wrapper.find(SearchResultsList).props().jumpToTopOfResults).to.equal(wrapper.instance().jumpToTopOfResults)
  })

})
