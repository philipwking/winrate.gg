import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Game from "../components/Game";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext"

const GamesList = () => {
    const [gamesArray, setGamesArray] = useState()

    function handleUpdate() { // save into api
        // API.riotSummoner(username).then((data) => { // gets data from riot
        //     API.updateSummonerId(data.id, data) // updates database
        //     API.riotMatchList(data.id).then((data) => { // uses id to get game list from riot
        //         API.updateMatchList(username, data) // stores match list
        //     })
        // })
    }

    return (
        <UserContext.Provider>
            <ul>
                {
                    gamesArray.matches.map((game) => (
                        <li>
                            <Game
                                key={game.gameId}
                            >
                                <Link to={"/" + UserContext.gameId}>
                                    Details
                                 </Link>
                            </Game>
                        </li>
                    ))}
            </ul>
        </UserContext.Provider>

    )
}


export default GamesList;


