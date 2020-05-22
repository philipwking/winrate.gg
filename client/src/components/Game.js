import React from "react";

function Game(props) {
    // all info of game into here
    return (
        <div>
            <div>
                key: {props.key}
            </div>
            <div>
                Win: {props.win}
            </div>
            <div>
                Kills: {props.kills}
            </div>
            <div>
                Deaths: {props.deaths}
            </div>
            <div>
                Assists: {props.assists}
            </div>
            <div>
                Champion: {props.champion}
            </div>
        </div>
    )
}

export default Game