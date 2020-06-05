import React, { useState, useEffect, useContext, render } from "react";
import API from "../utils/API";
import Game from "../components/Game";
import { Link, Redirect } from "react-router-dom"
import {useStoreContext} from "../utils/GlobalState"
import { SET_GAME_DETAILS, UPDATE_GAMES_LIST } from "../utils/actions";

const GamesList = (props) => {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        API.getMatchlist(state.userData.id)
            .then(res => dispatch({ type: SET_GAME_DETAILS, post: res.data }))
            .catch(err => console.log(err));
    }, []);

    const getGameDetails = (gameId) => {
        API.getMatchDetails(gameId).then((data) => {
            if (!data) {
                API.riotMatchDetails(gameId).then((data) => {
                    dispatch({
                        type: SET_GAME_DETAILS,
                        post: data
                    });
                    API.createMatchDetails(data).then(() => {
                        return (
                            <Redirect to="/GameDetails" />
                        )
                    })
                })
            } else if (data) {
                dispatch({
                    type: SET_GAME_DETAILS,
                    post: data
                });
                return (
                    <Redirect to="/GameDetails" />
                )
            }
        })

    };

    const updateGamesList = () => { 
        API.riotMatchList(state.username).then((data)=>{
            API.updateMatchList(data)
            dispatch({
                type: UPDATE_GAMES_LIST,
                post: data
            })
        })
    }

    return (
        <div>
            <Link to={"/"}>
                Home
            </Link>
            <button onClick={updateGamesList()}>
                Update
            </button>
            <ul>
                {
                    state.GamesList.matches.map((game) => (
                        <li>
                            <Game
                                key={game.gameId}
                            >
                                <button onClick={getGameDetails(game.gameId)}>
                                    Details
                                </button>
                            </Game>
                        </li>
                    ))}
            </ul>
        </div>

    )
}


export default GamesList;


