import React, { useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom"
import { useStoreContext } from "../utils/GlobalState"
import { SET_GAME_DETAILS, UPDATE_GAMES_LIST } from "../utils/actions";
import history from "../utils/history"
import timestamp from "unix-timestamp"
import findChampion from "../utils/champions"

const GamesList = () => {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        console.log("GAMES LIST LOADED!")
    }, []);

    const setGameDetails = (value) => {
        dispatch({
            type: SET_GAME_DETAILS,
            post: value
        });
    }

    const getGameDetails = (gameId) => {
        API.getMatchDetails(gameId).then((data) => {
            console.log("CHECKING OUR DATABASE...")
            if (data.data == null) {
                console.log("GETTING MATCH DETAILS FROM RIOT...")
                API.riotMatchDetails(gameId).then((data) => {
                    setGameDetails({
                        "_id": gameId,
                        "data": {
                            "gameId": data.data.gameId,
                            "platformId": data.data.platformId,
                            "gameCreation": data.data.gameCreation,
                            "gameDuration": data.data.gameDuration,
                            "queueId": data.data.queueId,
                            "mapId": data.data.mapId,
                            "seasonId": data.data.seasonId,
                            "gameVersion": data.data.gameVersion,
                            "gameMode": data.data.gameMode,
                            "gameType": data.data.gameType,
                            "teams": [...data.data.teams],
                            "participants": [...data.data.participants],
                            "participantIdentities":[...data.data.participantIdentities]
                          }
                    })
                    API.createMatchDetails({
                        "_id": gameId,
                        "data": {
                            "gameId": data.data.gameId,
                            "platformId": data.data.platformId,
                            "gameCreation": data.data.gameCreation,
                            "gameDuration": data.data.gameDuration,
                            "queueId": data.data.queueId,
                            "mapId": data.data.mapId,
                            "seasonId": data.data.seasonId,
                            "gameVersion": data.data.gameVersion,
                            "gameMode": data.data.gameMode,
                            "gameType": data.data.gameType,
                            "teams": [...data.data.teams],
                            "participants": [...data.data.participants],
                            "participantIdentities":[...data.data.participantIdentities]
                          }
                    }).then(() => {
                        console.log("DATA RECIEVED - SAVING AND REDIRECTING...")
                        history.push("/GameDetails");
                    })
                })
            } else {
                console.log("ALREADY HAVE DATA! REDIRECTING...")
                setGameDetails(data.data)
                history.push("/GameDetails");
            }
        })
    };

    const updateGamesList = () => {
        console.log("UPDATING GAMES LIST...")
        API.riotMatchList(state.accountId).then((data) => {
            API.updateMatchList(state.username.value,{
                "_id": state.username.value,
                "matches:": [...data.data.matches]
            })
            dispatch({
                type: UPDATE_GAMES_LIST,
                post: data.data.matches
            })
        })
        console.log("GAMES LIST UPDATED!")
    }

    return (
        <div>
            <Link to={"/"}>
                Home
            </Link>
            <button onClick={()=>{updateGamesList()}}>
                Update
            </button>
            <ul>
                {
                    state.gamesList.map((game) => (
                        <li key={game.gameId}>
                            <div>
                                Game ID:{game.gameId}
                            </div>
                            <div>
                                Champion:{findChampion(game.champion.toString())}
                            </div>
                            <div>
                                Time: {timestamp.toDate(game.timestamp).toString()}
                            </div>
                            <div>
                                Role:{game.role}
                            </div>
                            <div>
                                Lane:{game.lane}
                            </div>
                            <button onClick={()=>{getGameDetails(game.gameId)}}>
                                Details
                            </button>
                        </li>
                    ))}
            </ul>
        </div>

    )
}


export default GamesList;


