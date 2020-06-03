import GameDetails from "./pages/GameDetails"
import GameSearch from "./pages/GameSearch"
import GamesList from "./pages/GamesList"
import { Router, Route, Switch } from "react-router-dom"
import NoMatch from "./pages/NoMatch"
import React from "react";
import UserContext from "./utils/UserContext"

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <GameSearch/>
          </Route>
          <Route exact path={"/:username"}>
            <GamesList/>
          </Route>
          <Route exact path={"/:username/:gameId"}>
            <GameDetails/>
          </Route>
          <Route>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    );
}


export default App;
