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
        API.getSummonerData(state.username).then((data) => {
            if (!data) { // if no data on our servers ask riot
                API.riotSummoner(state.username).then((data) => {
                    API.createSummoner(data)
                    setUserData(data)
                    API.riotMatchList(data.id).then((data) => {
                        setGameslist(data)
                        API.createMatchList(data).then(() => {
                            return (
                                <Redirect to="/Games" />
                            )
                        })
                    })
                })
            } else if (data) { // for returning users with already saved data
                setGameslist(data)
                return (
                    <Redirect to="/Games" />
                )
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
