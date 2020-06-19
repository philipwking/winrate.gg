import GameDetails from "./pages/GameDetails"
import Search from "./pages/Search"
import GamesList from "./pages/GamesList"
import { Router, Route, Switch } from "react-router-dom"
import NoMatch from "./pages/NoMatch"
import React from "react";
import { StoreProvider } from "./utils/GlobalState";
import history from "./utils/history"
import { Container } from "@material-ui/core"
import Riot from "../src/pages/Riot"

const App = () => {
  return (
    <Router history={history}>
      <Container maxwidth="sm">
          <StoreProvider>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/Games" component={GamesList} />
              <Route exact path="/GameDetails" component={GameDetails} />
              <Route exact path="//riot.txt" component={Riot}/>
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
      </Container>
    </Router>
  )

}


export default App;
