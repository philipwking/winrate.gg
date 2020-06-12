import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import { useStoreContext } from "../utils/GlobalState"
import findChampion from "../utils/champions"
import NavBar from "../components/NavBar"

function GameDetails() {
    const [state, dispatch] = useStoreContext();

    const participants = [...state.gameDetails.data.participants]
    const participantIdentities = [...state.gameDetails.data.participantIdentities]


    const findParticipant = (id) => { // enter accountId and returns participant object that matches
        const thisPlayer = participantIdentities.filter((participant) => {
            return (
                participant.player.accountId === id
            )
        })

        var i = thisPlayer[0].participantId

        return participants[i - 1];
    }

    const mainPlayer = findParticipant(state.accountId)

    const team1 = participants.filter((participant) => {
        return (
            participant.teamId === mainPlayer.teamId &&
            participant.participantId !== mainPlayer.participantId
        )
    })

    const team2 = participants.filter((participant) => {
        return (
            participant.teamId !== mainPlayer.teamId
        )
    })


    const findUsername = (id) => { // enter participant Id and recive username
        const thisUser = participantIdentities.filter((participant) => {
            return (
                participant.participantId === id
            )
        })

        var user = thisUser[0].player.summonerName

        return user;
    }

    useEffect(() => {
        console.log("GAME DETAILS LOADED!")
    }, []);

    return (
        <div>
            <NavBar>
            </NavBar>
            <Link to={"/Games"}>
                Back to list
            </Link>
            <div>
                <div>
                    <div> You ({state.username.value}):
                        <div>
                            Champion: {findChampion(mainPlayer.championId.toString())}
                        </div>
                        <div>
                            Kills: {mainPlayer.stats.kills}
                        </div>
                        <div>
                            Deaths: {mainPlayer.stats.deaths}
                        </div>
                        <div>
                            Assists: {mainPlayer.stats.assists}
                        </div>
                    </div>
                    <div>
                        <div>
                            Your Team
                            <ul>
                                {
                                    team1.map((player) => (
                                        <li key={player.participantId}>
                                            User : {findUsername(player.participantId)}
                                            <div>
                                                <div>
                                                    Champion: {findChampion(player.championId.toString())}
                                                </div>
                                                <div>
                                                    Kills: {player.stats.kills}
                                                </div>
                                                <div>
                                                    Deaths: {player.stats.deaths}
                                                </div>
                                                <div>
                                                    Assists: {player.stats.assists}
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            Enemy Team
                            <ul>
                                {
                                    team2.map((player) => (
                                        <li key={player.participantId}>
                                            User : {findUsername(player.participantId)}
                                            <div>
                                                <div>
                                                    Champion: {findChampion(player.championId.toString())}
                                                </div>
                                                <div>
                                                    Kills: {player.stats.kills}
                                                </div>
                                                <div>
                                                    Deaths: {player.stats.deaths}
                                                </div>
                                                <div>
                                                    Assists: {player.stats.assists}
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameDetails