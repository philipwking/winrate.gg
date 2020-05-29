import axios from "axios";
const api_key = "RGAPI-81963466-1ace-4978-88e9-86e9d198f819"

export default {
  getSummonerId: function (username) {
    return axios.get("/api/summoners/:" + username)
  },
  getMatchlist: function (id) {
    return axios.get("/api/match/:" + id)
  },
  getMatchDetails: function (id) {
    return axios.get("/api/matchDetails/:" + id)
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
  updateSummonerId: function (username, data) {
    return axios.put("/api/summoners/:" + username, data)
  },
  updateMatchList: function (username, data) {
    return axios.put("/api/match/:" + username, data)
  },
  updateMatchDetails: function (id, data) {
    return axios.put("/api/matchDetails/:" + id, data)
  },
  createSummoner: function (username, data) {
   return axios.post("/api/summoners/:" + username, data)
  },
  createMatchList: function (username, data) {
   return axios.post("/api/match/:" + username, data)
  },
  createMatchDetails: function (id, data) {
   return axios.post("/api/matchDetails/:" + id, data)
  }
};
