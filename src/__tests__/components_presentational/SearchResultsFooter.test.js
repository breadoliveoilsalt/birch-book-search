import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() })

import SearchResultsFooter from '../../components_presentational/SearchResultsFooter'
import Loader from '../../components_presentational/Loader'
import LoadMoreResultsButton from '../../components_presentational/LoadMoreResultsButton'


describe("<SearchResultsFooter />", function() {

  it("should render a div with the className 'search-results-footer'", function() {

    const wrapper = shallow(<SearchResultsFooter />)
    expect(wrapper.find("div.search-results-footer")).to.have.lengthOf(1)

  })

  it("should render <Loader /> when props.makingBookAPIRequest is true", function() {

    const wrapper = shallow(<SearchResultsFooter makingBookAPIRequest={true} />)

    expect(wrapper.find(Loader)).to.exist
    expect(wrapper.find(Loader).isEmptyRender()).to.be.false

  })

  it("should not render <Loader /> when props.makingBookAPIRequest is false", function() {

    const wrapper = shallow(<SearchResultsFooter makingBookAPIRequest={false} />)
    expect(wrapper.find(Loader).isEmptyRender()).to.be.true

  })

  it("should render 'Use the Search Bar above to begin!' when props.makingBookAPIRequest is false and props.resultsNumber and props.resultsDisplayed are 0", function() {

    const props = {
      makingBookAPIRequest: false,
      resultsNumber: 0,
      resultsDisplayed: 0,
    }

    const wrapper = shallow(<SearchResultsFooter {...props} />)

    expect(wrapper.text()).to.include("Use the Search Bar above to begin!")

  })

  it("should render <LoadMoreResultsButton /> when props.resultsDisplayed is less than props.resultsNumber and should pass props.handleLoadMoreResults to <LoadMoreResultsButton />", function() {

    const props = {
      makingBookAPIRequest: false,
      resultsNumber: 15,
      resultsDisplayed: 10,
      handleLoadMoreResults: "A function"
    }

    const wrapper = shallow(<SearchResultsFooter {...props} />)

    expect(wrapper.find(LoadMoreResultsButton)).to.have.lengthOf(1)
    expect(wrapper.find(LoadMoreResultsButton).props().handleLoadMoreResults).to.equal(props.handleLoadMoreResults)

  })

  it("should render 'End of results.' when props.resultsDisplayed is greater-than-or-equal-to props.resultsNumber and props.resultsNumber is greater than 0", function() {

    const props = {
      makingBookAPIRequest: false,
      resultsNumber: 1,
      resultsDisplayed: 2,
    }

    const wrapper = shallow(<SearchResultsFooter {...props} />)

    expect(wrapper.text()).to.include("End of results.")

  })

  it("should not render 'End of results.' when props.resultsNumber is equal to 0", function() {

    const props = {
      makingBookAPIRequest: false,
      resultsNumber: 0,
      resultsDisplayed: 0,
    }

    const wrapper = shallow(<SearchResultsFooter {...props} />)

    expect(wrapper.text()).to.not.include("End of results.")

  })

})
