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

    const setGamesList = (value) => {
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
        var user = state.username.value
        API.getSummonerData(user).then((data) => {
            console.log("checking our database for summoner")
            console.log("data:")
            console.log(data)
            if (data.data == null) { // if no data on our servers ask riot
                console.log("no data, asking riot")
                API.riotSummoner(user).then((data) => {
                    console.log(data.data)
                    API.createSummoner({
                        "accountId": data.data.accountId,
                        "id": data.data.id,
                        "_id": data.data.name,
                        "profileIconId": data.data.profileIconId,
                        "puuid": data.data.puuid,
                        "revisionDate": data.data.revisionDate,
                        "summonerLevel": data.data.summonerLevel
                    })
                    setUserData({
                        "accountId": data.data.accountId,
                        "id": data.data.id,
                        "_id": user,
                        "profileIconId": data.data.profileIconId,
                        "puuid": data.data.puuid,
                        "revisionDate": data.data.revisionDate,
                        "summonerLevel": data.data.summonerLevel
                    })
                    API.riotMatchList(data.data.accountId).then((data) => {
                        setGamesList(data.data.matches)
                        API.createMatchList({
                            "_id": user,
                            "matches": [...data.data.matches]
                        }).then(() => {
                            return(
                                <Redirect push to="/Games" />
                            )
                        })
                    })
                })
            } else { // for returning users with already saved data
                console.log("already have the data:")
                console.log(data)
                API.getMatchList(user).then((data) => {
                    console.log("getting match list with username")
                    console.log(data)
                    setGamesList(data)
                    return (
                        <Redirect push to="/Games" />
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
