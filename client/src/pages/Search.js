import React, { useState, useEffect, useContext, render } from "react";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";
import { Link, Redirect } from "react-router-dom"
import GameDetails from "./GameDetails";
import { useStoreContext } from "../utils/GlobalState";
import Update from "../components/Update"
import { SET_USERNAME, SET_USER_DATA, SET_GAMES_LIST } from "../utils/actions";

const Search = () => {
    const [state, dispatch] = useStoreContext();


    const setUsername = (value) => {
        dispatch({
            type: SET_USERNAME,
            post: value
        });
    };

    const setUserData = (value) => {
        dispatch({
            type: SET_USER_DATA,
            post: value
        })
    }

    const setGameslist = (value) => {
        
        dispatch({
            type: SET_GAMES_LIST,
            post: value
        });
    };


    function handleInputChange(event) {
        const value = event.target;
        setUsername(value)
    };



    function handleFormSubmit(event) {
        event.preventDefault();
        // check our database for username
        // if no existing data, call riot api with username
        // send user data to server
        // get riot games list with user ID
        // redirect to GamesList
        var user = state.username.value
        API.getSummonerData(user).then((data) => {
            console.log("checking our database for summoner")
            console.log("data:")
            console.log(data)
            if (data.data == null) { // if no data on our servers ask riot
                console.log("no data, asking riot")
                API.riotSummoner(user).then((data) => {
                    console.log(data.data)
                    API.createSummoner(data.data)
                    setUserData(data.data)
                    API.riotMatchList(data.data.accountId).then((data) => {
                        console.log(data)
                        setGameslist(data.data.matches)
                        console.log(state.gamesList)
                        API.createMatchList(data).then(() => {
                            return (
                                <Redirect to="/Games" />
                            )
                        })
                    })
                })
            } else { // for returning users with already saved data
                console.log("already have the data:")
                console.log(data)
                API.getMatchList(user).then((data)=>{
                    console.log("getting match list with username")
                    console.log(data)
                    setGameslist(data)
                    return (
                        <Redirect to="/Games" />
                    )
                })

            }
        })
    };

    return (
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
    )
}


export default Search;
