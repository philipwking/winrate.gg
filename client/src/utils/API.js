import axios from "axios";
const api_key = "RGAPI-e882f331-09fd-433a-b349-914086f3d6c2"

export default {
  getSummonerId: function (username) {
    return axios.get("/api/summoners/:" + username).catch(error=>{
      this.createNewSummoner(username)
    });
  },
  getMatchlist: function (id) {
    return axios.get("/api/match/:" + id)
  },
  getMatchDetails: function (id) {
    return axios.get("/api/matchDetails/:" + id)
  },
  updateSummonerId: function (username) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${api_key}`)
      .then((data) => {
        axios.put("/api/summoners/:" + username, data)
        axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${data.id}?api_key=${api_key}`)
          .then((data) => {
            axios.put("/api/match/:" + username, data)
            data.matches.map((data) => {
              axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matches/${data.gameId}/?api_key=${api_key}`)
                .then((data) => {
                  axios.put("/api/matchDetails/:" + data.gameId, data)
                });
            })
          });
      });
  },
  createNewSummoner: function (username) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${api_key}`)
      .then((data) => {
        axios.post("/api/summoners/", data)
        axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${data.id}?api_key=${api_key}`)
          .then((data) => {
            axios.post("/api/match/:" + username, data)
            data.matches.map((data) => {
              axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matches/${data.gameId}/?api_key=${api_key}`)
                .then((data) => {
                  axios.post("/api/matchDetails/:" + data.gameId, data)
                });
            })
          });
      });
    }
};
