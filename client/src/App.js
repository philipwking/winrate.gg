import GameDetails from "./pages/GameDetails"
import Search from "./pages/Search"
import GamesList from "./pages/GamesList"
import { Router, Route, Switch } from "react-router-dom"
import NoMatch from "./pages/NoMatch"
import React from "react";
import { StoreProvider } from "./utils/GlobalState";
import history from "./utils/history"


const App = () => {

  // const history = createBrowserHistory();
  // const history = createMemoryHistory()

  return (
    <Router history={history}>
      <div>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/Games" component={GamesList} />
            <Route exact path="/GameDetails" component={GameDetails} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  )

}


export default App;
