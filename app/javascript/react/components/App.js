import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import SiteIndexContainer from './SiteIndexContainer'
import SiteFormContainer from './SiteFormContainer'
import StageTile from './StageTile'
import Time from './Time'
import ProfitTile from './ProfitTile'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SiteIndexContainer}/>
        <Route exact path="/projects" component={SiteFormContainer}/>
        <Route exact path="/stages" component={StageTile}/>
        <Route exact path="/cpm" component={Time}/>
        <Route exact path="/profits" component={ProfitTile}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
