import axios from "axios";
const api_key = "RGAPI-e373009a-cfbb-4db0-983a-b355676197b2"

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
  createSummoner: function (data) {
   return axios.post("/api/summoners/", data)
  },
  createMatchList: function (data) {
   return axios.post("/api/matchList/", data)
  },
  createMatchDetails: function (data) {
   return axios.post("/api/matchDetails/", data)
  }
};
