import React from "react";
import Game from "./Game";


function GamesList(props) {
    return (
        <ul>
            {props.gamesArray.map((game) => (
                <li>
                    <Game
                        // need to add some logic here
                        // to determine which participant
                        // has the same username as what was first
                        // submitted 
                        key={game.gameId}
                        platformId = "NA1"
                        gameId = "3310468845"
                        champion = "51"
                        queue = "420"
                        season = "13"
                        timestamp = "1582957427470"
                        role = "DUO_CARRY"
                        lane = "BOTTOM"
                        // win={game.participants[0].stats.win}  
                        // kills={game.participants[0].stats.kills}
                        // deaths={game.participants[0].stats.deaths}
                        // assists={game.participants[0].stats.assists}
                        // champion={game.participants[0].championId}
                    />
                </li>
            ))}
        </ul> 
    )
}

export default GamesList