import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components_presentational/Header'
import NavBar from './components_presentational/NavBar'
import SearchLayoutAndLogic from './components_container/SearchLayoutAndLogic'
import AboutPage from './components_presentational/AboutPage'
import PageNotFound from './components_presentational/PageNotFound'

const App = () => {

  return (

    <BrowserRouter>

      <div className="app-container">

        <Header />
        <NavBar />

        <Switch>
          <Route path="/" exact component={SearchLayoutAndLogic} />
          <Route path="/about" exact component={AboutPage} />
          <Route component={PageNotFound} />
        </Switch>

      </div>

    </ BrowserRouter>

  )

}

export default App