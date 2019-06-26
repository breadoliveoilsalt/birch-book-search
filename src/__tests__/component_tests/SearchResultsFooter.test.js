import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import sinon from 'sinon'

Enzyme.configure({ adapter: new Adapter() })

import SearchResultsFooter from '../../components_presentational/SearchResultsFooter'
import Loader from '../../components_presentational/Loader'


describe("<SearchResultsFooter />", function() {

  it("should load the Loader component when props.makingBookAPIRequest is true", function() {

    const wrapper1 = shallow(<SearchResultsFooter makingBookAPIRequest={true} />)

    expect(wrapper1.find(Loader)).to.exist
    expect(wrapper1.find(Loader).isEmptyRender()).to.be.false

    const wrapper2 = shallow(<SearchResultsFooter makingBookAPIRequest={false}/>)
    expect(wrapper2.find(Loader).isEmptyRender()).to.be.true

  })

  it("should display a 'Load More Results' button to load more results when props.resultsDisplayed is less than props.resultsNumber", function() {


    const props = {
      makingBookAPIRequest: false,
      resultsNumber: 15,
      resultsDisplayed: 10
    }

    const wrapper = mount(<SearchResultsFooter {...props} />)

    expect(wrapper.find("input[value='Load More Results']")).to.exist
  })

})
