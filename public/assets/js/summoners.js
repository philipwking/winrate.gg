const api_key = "RGAPI-9e205c37-59fa-438a-81e3-bb7594f2399b"
const gamesArray = [];

$(".update").click(function (event) {
    console.log("click")
    event.preventDefault()
    const username = $("#updateName").val()

    $.ajax({
        method: 'GET',
        url: `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${api_key}`,
        headers: {
            "X-Riot-Token": api_key,
        }
    }).then((data) => {
        const accountId = data.accountId;
        $.ajax("/api/summoners", {
            type: "POST",
            data: {
                summoner_name: username,
                summoner_id: data.accountId
            }
        }).then((data) => {
            $.ajax({
                method: 'GET',
                url: `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${api_key}`,
                headers: {
                    "X-Riot-Token": api_key,
                }
            }).then((data) => {
                const gamesIdArray = []
                const matches = data.matches

                matches.forEach(element => {
                    gamesIdArray.push(element.gameId)
                })

                console.log(gamesIdArray)

                for (i = 0; i < 20; i++) {

                    setTimeout(function () { console.log("game " + i) }, 3000);

                    $.ajax({
                        method: 'GET',
                        url: `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matches/${gamesIdArray[i]}`,
                        headers: {
                            "X-Riot-Token": api_key,
                        }
                    }).then((data) => {
                        let playersArray = [data.participantIdentities[0], data.participantIdentities[1], data.participantIdentities[2], data.participantIdentities[3], data.participantIdentities[4], data.participantIdentities[5], data.participantIdentities[6], data.participantIdentities[7], data.participantIdentities[8], data.participantIdentities[9],]

                        let playerIndex;
                        let otherindex;

                        for (z = 0; z < playersArray.length; z++) {
                            if (playersArray[z].player.summonerName === username) {
                                playerIndex = playersArray[z].participantId - 1;
                                otherindex = z;
                            }
                        }
                        let win = 0
                        if (data.participants[playerIndex].stats.win) {
                            win = 1
                        }

                        let gameObject = {
                            "gameId": data.gameId,
                            "time": data.gameCreation,
                            "win": win,
                            "kills": data.participants[playerIndex].stats.kills,
                            "deaths": data.participants[playerIndex].stats.deaths,
                            "assists": data.participants[playerIndex].stats.assists,
                            "champion": data.participants[playerIndex].championId,
                        }

                        $.ajax("/api/summoners/" + username, {
                            type: "POST",
                            data: gameObject
                        })
                    })
                }      
            })
        })
    })
})
