it("renders three Route components under the Switch Component", function(){
  expect(wrapper.find(Route)).to.have.lengthOf(3)
})

})

describe("<App />'s children depeding on the route: ", function(){

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
