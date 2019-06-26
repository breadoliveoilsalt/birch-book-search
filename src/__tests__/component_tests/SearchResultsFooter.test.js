import React from 'react'
import { expect } from 'chai'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import SearchResultsFooter from '../../components_presentational/SearchResultsFooter'
import Loader from '../../components_presentational/Loader'


describe("<SearchResultsFooter />", function() {

  it("should load the Loader component when props.makingBookAPIRequest is true", function() {

    const wrapper1 = shallow(<SearchResultsFooter makingBookAPIRequest={true} />)
    expect(wrapper1.find(Loader)).to.exist

    const wrapper2 = shallow(<SearchResultsFooter makingBookAPIRequest={false}/>)
    expect(wrapper2.find(Loader).isEmptyRender()).to.be.true

  })

  it("should display a button to load more results when props.resultsDisplayed is less than props.resultsNumber", function() {

    const wrapper = shallow(<SearchResultsFooter makingBookAPIRequest={false} resultsNumber={10} resultsDisplayed={15} />)
    console.log(wrapper.debug())

    expect(wrapper.find("input[value='Load More Results']")).to.exist

    // describe("the button should call props.handleLoadMoreResults when clicked", function() {
    //
    // })
  })


  it("should display a link to jump to the top of the page when props.resultsDisplayed is less than props.resultsNumber", function() {

    const wrapper = shallow(<SearchResultsFooter resultsNumber={20} resultsDisplayed={15} />)
    console.log(wrapper.debug())
    // expect(wrapper.find("a").text()).to.equal("Jump To Top of Results")

  })

  it("should display a link to jump to the top of the page that calls props.jumpToTopOfResults when clicked", function() {

  })
})
//
//   <SearchResultsFooter
//     makingBookAPIRequest={props.makingBookAPIRequest}
//     resultNumber={props.resultNumber}
//     resultsDisplayed={resultsDisplayed}
//     handleLoadMoreResults={props.handleLoadMoreResults}
//     jumpToTopOfResults={props.jumpToTopOfResults}
//   />
//
//   it("should not render when the errorMessage props is null", function(){
//     const wrapper = shallow(<ErrorDisplay errorMessage={null} />)
//     expect(wrapper.isEmptyRender()).to.be.true
//   })
//
//   it("should render when the errorMessage props is a string", function(){
//     const wrapper = shallow(<ErrorDisplay errorMessage={"Big Error"} />)
//     expect(wrapper.isEmptyRender()).to.be.false
//   })
//
//   it("should dislay the errorMessage passed as a prop", function(){
//     let error = "Big Error"
//     const wrapper = shallow(<ErrorDisplay errorMessage={error} />)
//     expect(wrapper.text()).to.include(error)
//   })
//
// })
//
// import SearchResultsFooter from '../components_container/SearchResultsFooter'
//
// describe("<SearchResultsFooter />", function() {
//   it("should not display anything when the Redux state for current search results is empty and an API request is not being made", function() {
//
//   })
//
//   it("should display only a loading indicator when an API request is being made, whether or not there are current search results in the Redux state", function() {
//     // test for nothing else there
//   })
//
//   it("should render a Load More Results button if there are current search results in the Redux state and an API request is not being made", function() {
//
//     // test that rendered
//     describe("Load More Results Button", function() {
//
//       it("should increase the startingId in the Redux state by 20", function() {
//
//       })
//
//       it("should call getBookRecords() from basicBookSearchThunk when clicked with the increased startingId, the results per query, and the current query search terms from the Redux state", function() {
//
//       })
//
//     })
//   })
//
//   it("should display a 'Return to the Top' link to the top of <SearchResultsList /> if there are book records in the Redux state", function() {
//
//     describe("The 'Return to the Top' link", function() {
//       it("should return to the top of <SearchResultsList /> when clicked", function() {
//
//       })
//
//     })
//
//   })
//
//
//
// })
