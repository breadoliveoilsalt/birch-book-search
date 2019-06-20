import fetchMock from 'fetch-mock'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

// You would import the action from your codebase in a real scenario
function success() {
  return {
    type: 'FETCH_DATA_SUCCESS'
  }
}

function fetchData () {
  return dispatch => {
    return fetch('/users.json') // Some async action with promise
      .then(() => dispatch(success()))
  };
}

it('should execute fetch data', () => {
  const store = mockStore({})

  fetchMock.getOnce('/users.json', {
    body: { todos: ['do something'] },
    headers: { 'content-type': 'application/json' }
  })
  // Return the promise
  return store.dispatch(fetchData())
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual(success())
    })
})
