import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom"
import {useStoreContext} from "../utils/GlobalState"

function GameDetails(props) {
    const [state, dispatch] = useStoreContext();

    return (
        <div>
            <Link to={"/Games"}>
                Back to list
            </Link>
            <div>
                <p>Kills</p>
                <p>Deaths</p>
                <p>Assists</p>
                <p>Champion</p>
                <p>Win?</p>
            </div>
        </div>
    )
}

export default GameDetails