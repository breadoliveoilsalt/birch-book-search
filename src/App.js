import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './components_presentational/Header'
import NavBar from './components_presentational/NavBar'
import Routes from './components_presentational/Routes'

const App = () => {

  return (

    <BrowserRouter>

      <div className="app-container">

        <Header />
        <NavBar />
        <Routes />

      </div>

    </ BrowserRouter>

  )

}

export default App
