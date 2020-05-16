import React, { Component } from "react";
import GamesList from "./GamesList";
import SearchBar from "./SearchBar"
import API from "../utils/API"

class Container extends Component {

    state = {
        result: {},
        search: "",
        gamesArray: []
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    }

    handleFormSubmit = event => {
        event.preventDefault();

        API.getSummonerId(this.state.search).then(res => {
            console.log(res)
            API.getMatchlist(res.accountId).then(res => {
                console.log(res)
                var games = res.matches
                var gamesArray = []
                games.map(game => {
                    API.getMatchDetails(game.gameId)
                    .then(res => {
                        console.log(res)
                        gamesArray.push(res)
                        this.setState({gamesArray:gamesArray})
                    })})
            })
        })
    }


    render() {
        return (
            <div>
                <div>
                    <SearchBar
                        value={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                </div>
                <div>
                    <GamesList
                        gamesArray={this.state.gamesArray}
                    />
                </div>
            </div>
        )
    }
}

export default Container