import React, { useState, useEffect } from "react";
import API from "./utils/API";
import Game from "./components/Game";
import GameDetails from "./components/GameDetails"
import Update from "./components/Update"
import { Input, FormBtn } from "./components/Form";
import { Router, Route, Switch, Link } from "react-router-dom"

const App = () => {
  const [username, setUsername] = useState("HerbSkywalker")
  const [summonerData, setSummonerData] = useState()
  const [gamesArray, setGamesArray] = useState()
  const [gameDetails, setGameDetails] = useState()

  useEffect(() => {
    API.getSummonerId("HerbSkywalker")
      .then((data) => {
        setSummonerData(data)
        API.getMatchlist(username).then((data) => {
          setGamesArray(data)
        })
      })
  }, [])

  function handleUpdate() { // save into api
    API.riotSummoner(username).then((data) => { // gets data from riot
      API.updateSummonerId(data.id, data) // updates database
      API.riotMatchList(data.id).then((data) => { // uses id to get game list from riot
        API.updateMatchList(username, data) // stores match list
      })
    })
  }

  function updateMatchDetails(id) {
    API.riotMatchDetails(id)
      .then((data) => {
        API.updateMatchDetails(id, data)
        setGameDetails(data)
      })
  }

  function handleInputChange(event) {
    const value = event.target;
    setUsername(value)
  };

  function handleFormSubmit(event) { // get data from database
    event.preventDefault();

    API.getSummonerId(username).catch((error) => {
      if (error) {
        API.createNewSummoner(username)
      }
    })
      .then((data) => {
        setSummonerData({ ...summonerData, [username]: data })
        API.getMatchlist(username).then((data) => {
          setGamesArray({ ...gamesArray, [username]: data })
        })
      })
  };

    return (<div></div>
    //   <div>
    //     <div>
    //       <form>
    //         <Input
    //           onChange={handleInputChange}
    //           name="username"
    //           placeholder="username"
    //         />
    //         <FormBtn
    //           onClick={handleFormSubmit}
    //         >
    //           Submit
    //             </FormBtn>
    //       </form>
    //     </div>
    //     <div>
    //       <Update
    //         onClick={handleUpdate()}
    //       />
    //     </div>
    //     <Router>
    //       <Switch>
    //         <Route exact path={"/"}>
    //           <ul>
    //             {
    //               gamesArray.matches.map((game) => (
    //                 <li>
    //                   <Game
    //                     key={game.gameId}
    //                   >
    //                     <Link onClick={() => updateMatchDetails(game.gameId)} to={"/" + game.gameId}>
    //                       Details
    //                   </Link>
    //                   </Game>
    //                 </li>
    //               ))}
    //           </ul>
    //         </Route>
    //         <Route exact path={"/" + gameDetails.gameId}>
    //           <GameDetails
    //             id={gameDetails.gameId}
    //           >
    //             <Link to="/">
    //               Games List
    //             </Link>
    //           </GameDetails>
    //         </Route>
    //       </Switch>
    //     </Router>
    //     <div>
    //     </div>
    //   </div>
    );
}


export default App;
