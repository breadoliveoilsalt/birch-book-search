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
import JumpToTopButton from '../../components_presentational/JumpToTopButton'

describe("<SearchLayoutAndLogic /> - Testing Rendering Children and Passing Props to Children", function() {

  it("should render the SearchBar, ClearSearchButton, ErrorDisplay, SearchResultsList Components, and JumpToTopButton", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)

    expect(wrapper.find(SearchBar)).to.exist
    expect(wrapper.find(ClearSearchButton)).to.exist
    expect(wrapper.find(ErrorDisplay)).to.exist
    expect(wrapper.find(SearchResultsList)).to.exist
    expect(wrapper.find(JumpToTopButton)).to.exist
  })

  it("should have a prototpye method #handleClearSearch that is passed to the ClearSearchButton component as a prop", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)
    expect(wrapper.find(ClearSearchButton).props().handleClearSearch).to.equal(wrapper.instance().handleClearSearch)
  })

  it("should have a prototype method #handleSearchSubmit that is passed to the SearchBar component as a prop", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)
    expect(wrapper.find(SearchBar).props().handleSearchSubmit).to.equal(wrapper.instance().handleSearchSubmit)
  })

  it("should have a prototype method #handleLoadMoreResults that is passed to SearchResultsList component as a prop", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)
    expect(wrapper.find(SearchResultsList).props().handleLoadMoreResults).to.equal(wrapper.instance().handleLoadMoreResults)
  })

  it("should have a prototype method #jumpToTop that is passed to the JumpToTopButton component as a prop", function() {
    const wrapper = shallow(<SearchLayoutAndLogic />)
    expect(wrapper.find(JumpToTopButton).props().jumpToTop).to.equal(wrapper.instance().jumpToTop)
  })

})
