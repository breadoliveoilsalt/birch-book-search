import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from '../../configureStore'

import App from '../../App'

it('renders, connected to the Redux store, without crashing', () => {

  let store = configureStore()

  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}> <App /> </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
