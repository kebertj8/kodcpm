import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import SiteIndexContainer from './SiteIndexContainer'
import SiteTile from './SiteTile'
import StageTile from './StageTile'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SiteIndexContainer}/>
        <Route exact path="/projects" component={SiteTile}/>
        <Route exact path="/stages" component={StageTile}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
