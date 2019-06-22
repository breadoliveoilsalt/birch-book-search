

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from '../../configureStore'
import SearchLayoutAndLogic from '../../components_container/SearchLayoutAndLogic'

import App from '../../App';

it('renders without crashing', () => {

  let store = configureStore()

  const div = document.createElement('div')
  ReactDOM.render(<Provider store={store}> <SearchLayoutAndLogic /> </Provider>, div)


  ReactDOM.unmountComponentAtNode(div);
});
