import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import SiteIndexContainer from './SiteIndexContainer'
import SiteFormContainer from './SiteFormContainer'
import StageTile from './StageTile'
import Time from './Time'
import ProfitTile from './ProfitTile'
import BMaterialTile from './BMaterialTile'
import SMaterialTile from './SMaterialTile'
import Contractors from './Contractors'
import Expenses from './Expenses'
import ChangeOrderTile from './ChangeOrderTile'
import CpmTile from './CpmTile'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SiteIndexContainer}/>
        <Route exact path="/projects" component={SiteFormContainer}/>
        <Route exact path="/stages" component={StageTile}/>
        <Route exact path="/cpm" component={Time}/>
        <Route exact path="/profits" component={ProfitTile}/>
        <Route exact path="/basicMaterials" component={BMaterialTile}/>
        <Route exact path="/specialMaterials" component={SMaterialTile}/>
        <Route exact path="/contractors" component={Contractors}/>
        <Route exact path="/expenses" component={Expenses}/>
        <Route exact path="/changeOrder" component={ChangeOrderTile}/>
        <Route exact path="/mainCpm" component={CpmTile}/>

      </Switch>
    </BrowserRouter>
  )
}

export default App
