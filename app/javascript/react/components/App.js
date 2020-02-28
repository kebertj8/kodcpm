import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import SiteIndexContainer from './SiteIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SiteIndexContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
