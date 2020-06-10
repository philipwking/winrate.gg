import axios from "axios";
const api_key = "RGAPI-44d9d8dc-3494-4550-b393-1a605b1723e1"

export default {
  getSummonerData: function (username) {
    return axios.get("/api/summoners/" + username)
  },
  getMatchList: function (username) {
    return axios.get("/api/matchList/" + username)
  },
  getMatchDetails: function (id) {
    return axios.get("/api/matchDetails/" + id)
  },
  riotSummoner: function (username) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${api_key}`)
  },
  riotMatchList: function (id) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${id}?api_key=${api_key}`)
  },
  riotMatchDetails: function (id) {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matches/${id}/?api_key=${api_key}`)
  },
  updateSummonerData: function (username, data) {
    return axios.put("/api/summoners/" + username, data)
  },
  updateMatchList: function (username, data) {
    return axios.put("/api/matchList/" + username, data)
  },
  updateMatchDetails: function (id, data) {
    return axios.put("/api/matchDetails/" + id, data)
  },
  createSummoner: function (username, data) {
   return axios.post("/api/summoners/" + username, data)
  },
  createMatchList: function (username, data) {
   return axios.post("/api/matchList/" + username, data)
  },
  createMatchDetails: function (id, data) {
   return axios.post("/api/matchDetails/" + id, data)
  }
};
