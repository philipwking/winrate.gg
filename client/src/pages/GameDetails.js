import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext"

function GameDetails(props) {
    const [gameDetails, setGameDetails] = useState()


    function updateMatchDetails(id) {
        // API.riotMatchDetails(id)
        //     .then((data) => {
        //         API.updateMatchDetails(id, data)
        //         setGameDetails(data)
        //     })
    }

    // basic game info here
    return (
        <UserContext.Provider>
            <Link to={"/" + UserContext.username}>
                Back to list
            </Link>
        </UserContext.Provider>
    )
}

export default GameDetails