import React from "react";

function Game(props) {
    // all info of game into here
    return (
        <div className="card">
            <div>
                platformId = {props.platformId}
            </div>
            <div>
                champion = {props.champion}
            </div>
            <div>
                queue = {props.champion}
            </div>
            <div>
                season = {props.season}
            </div>
            <div>
                timestamp = {props.timestamp}
            </div>
            <div>
                role = {props.role}
            </div>
            <div>
                lane = {props.lane}
            </div>
            {/* <div>
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
            </div> */}
        </div>
    )
}

export default Game