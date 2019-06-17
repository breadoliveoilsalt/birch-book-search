import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// up to getting NavLinks to work -- need to incorporate browserouter

import Header from './components_presentational/Header'
import NavBar from './components_presentational/NavBar'

const App = () => {

  return (
    <BrowserRouter>
      <div className="app-container">

        <Header />
        <NavBar />
      </div>
    </ BrowserRouter>
  )

}

export default App;
