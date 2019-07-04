import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SearchLayoutAndLogic from '../components_container/SearchLayoutAndLogic'
import AboutPage from './AboutPage'
import PageNotFound from './PageNotFound'

const Routes = () => {

  return (
    <Switch>
      <Route path="/" exact component={SearchLayoutAndLogic} />
      <Route path="/about" exact component={AboutPage} />
      <Route component={PageNotFound} />
    </Switch>
  )

}

export default Routes
