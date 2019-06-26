import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import SearchResultsList from '../../components_presentational/SearchResultsList'
import SearchResultsHeader from '../../components_presentational/SearchResultsHeader'
import BookRecord from '../../components_presentational/BookRecord'
import SearchResultsFooter from '../../components_presentational/SearchResultsFooter'

describe("<SearchResultsList />", function() {

  it("should render the SearchResultsHeader and SearchResultsFooter Components", function() {

    const wrapper = shallow(<SearchResultsList results={[]}/>)

    expect(wrapper.find(SearchResultsHeader)).to.exist
    expect(wrapper.find(SearchResultsFooter)).to.exist

  })

  it("should render a BookRecord for every object in props.results", function() {

    const wrapper1 = shallow(<SearchResultsList results={[]}/>)
    expect(wrapper1.find(BookRecord).isEmptyRender()).to.be.true

    /////

    const mockResults = [{
      imageURL: "http://books.google.com/books/content?id=2o_mEBpjucUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      title: "Jimmy the Squirrel",
      authors: "Amr Taher",
      publisher: "AuthorHouse",
      additionalInfoURL: "http://books.google.com/books?id=2o_mEBpjucUC&dq=jimmy&hl=&source=gbs_api"
    },
    {
      imageURL: "http://books.google.com/books/content?id=OsbuBD3mkkkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      title: "Jimmy Page",
      authors: "George Case",
      publisher: "Hal Leonard Corporation",
      additionalInfoURL: "http://books.google.com/books?id=OsbuBD3mkkkC&dq=jimmy&hl=&source=gbs_api"
    }]

    const wrapper2 = shallow(<SearchResultsList results={mockResults}/>)
    expect(wrapper2.find(BookRecord).length).to.equal(2)

  })

})
