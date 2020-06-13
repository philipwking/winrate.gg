import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import { useStoreContext } from "../utils/GlobalState"
import findChampion from "../utils/champions"
import NavBar from "../components/NavBar"
import Chart from "react-apexcharts"



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

    const options1 = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: [findUsername(mainPlayer.participantId), findUsername(team1[0].participantId), findUsername(team1[1].participantId), findUsername(team1[2].participantId), findUsername(team1[3].participantId)]
        },
        yaxis: {
            title: {
                text: 'Kills/Deaths/Assists'
            }
        },
        fill: {
            opacity: 1
        }
    }
    const series1 = [
        {
            name: 'Kills',
            data: [mainPlayer.stats.kills, team1[0].stats.kills, team1[1].stats.kills, team1[2].stats.kills, team1[3].stats.kills]
        }, {
            name: 'Deaths',
            data: [mainPlayer.stats.deaths, team1[0].stats.deaths, team1[1].stats.deaths, team1[2].stats.deaths, team1[3].stats.deaths]
        }, {
            name: 'Assists',
            data: [mainPlayer.stats.assists, team1[0].stats.assists, team1[1].stats.assists, team1[2].stats.assists, team1[3].stats.assists]
        }
    ]
    const options2 = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: [findUsername(team2[0].participantId), findUsername(team2[1].participantId), findUsername(team2[2].participantId), findUsername(team2[3].participantId), findUsername(team2[3].participantId)]
        },
        yaxis: {
            title: {
                text: 'Kills/Deaths/Assists'
            }
        },
        fill: {
            opacity: 1
        }
    }
    const series2 = [
        {
            name: 'Kills',
            data: [team2[0].stats.kills, team2[1].stats.kills, team2[2].stats.kills, team2[3].stats.kills, team2[4].stats.kills]
        }, {
            name: 'Deaths',
            data: [team2[0].stats.deaths, team2[1].stats.deaths, team2[2].stats.deaths, team2[3].stats.deaths, team2[4].stats.deaths]
        }, {
            name: 'Assists',
            data: [team2[0].stats.assists, team2[1].stats.assists, team2[2].stats.assists, team2[3].stats.assists, team2[4].stats.assists]
        }
    ]



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
                    <div className={mainPlayer.stats.win ? "win" : "loss"}> You ({state.username.value}):
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
                        <div>
                            Win?: {mainPlayer.stats.win.toString()}
                        </div>
                    </div>
                    <div>
                        <div className={mainPlayer.stats.win ? "win" : "loss"}>
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
                            <div id="chart">
                                <Chart options={options1} series={series1} type="bar" height={350} />
                            </div>
                        </div>
                        <div className={!mainPlayer.stats.win ? "win" : "loss"}>
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
                            <div id="chart">
                                <Chart options={options2} series={series2} type="bar" height={350} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameDetails