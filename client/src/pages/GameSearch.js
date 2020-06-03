import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom"
import GameDetails from "./GameDetails";
import UserContext from "../utils/UserContext";
import Update from "../components/Update"

const GameSearch = () => {
    const [username, setUsername] = useState("HerbSkywalker")
    const [summonerData, setSummonerData] = useState()



    function handleInputChange(event) {
        // const value = event.target;
        // setUsername(value)
    };

    function handleFormSubmit(event) { // get data from database
        // event.preventDefault();

        // API.getSummonerId(username).catch((error) => {
        //     if (error) {
        //         API.createNewSummoner(username)
        //     }
        // })
        //     .then((data) => {
        //         setSummonerData({ ...summonerData, [username]: data })
        //         API.getMatchlist(username).then((data) => {
        //             setGamesArray({ ...gamesArray, [username]: data })
        //         })
        //     })
    };

    function handleUpdate(){}


    return (
        <UserContext.Provider value={username}>
            <div>
                <form>
                    <Input
                        onChange={handleInputChange}
                        name="username"
                        placeholder="username"
                    />
                    <FormBtn
                        onClick={handleFormSubmit}
                    >
                        Submit
                    </FormBtn>
                </form>
            </div>
            <div>
                <Update
                    onClick={handleUpdate()}
                />
            </div>
        </UserContext.Provider>
    )


}


export default GameSearch;
