import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import SearchResultsHeader from '../../components_presentational/SearchResultsHeader'
import BigDivider from '../../components_presentational/BigDivider'

describe("<SearchResultsHeader />", function() {

  describe("when props.resultsNumber is 0", function() {

    it("should not render", function() {
      const wrapper = shallow(<SearchResultsHeader resultsNumber={0}/>)
      expect(wrapper.isEmptyRender()).to.be.true
    })

  })

  describe("when props.resultsNumber is greater than 0", function() {

    let wrapper

    beforeEach(function() {
      wrapper = shallow(<SearchResultsHeader resultsNumber={15}/>)
    })

    it("should render a div with an id of 'search-results-header'", function() {
      expect(wrapper.find("div#search-results-header")).to.have.lengthOf(1)
    })

    it("should render text indicating how many results returned", function() {
      expect(wrapper.text()).to.include("15 potential result(s)")
    })

    it("should render two <BigDivider />s", function() {
      expect(wrapper.find(BigDivider)).to.have.lengthOf(2)
    })

  })

})
