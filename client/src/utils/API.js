import axios from "axios";
const api_key = "RGAPI-474206b3-f407-44d3-b9b1-9481fbc224d8"

export default {
  getSummonerId: function (id) {
    return axios.get("/api/summoners/:"+id);
  },
  getMatchlist: function (id) {
    return axios.get("/api/match/:"+id)
  },
  getMatchDetails: function (id) {
    return axios.get("/api/matchDetails/:"+id)
  },
  updateSummonerId: function(id){
    return axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${id}?api_key=${api_key}`)
      .then((data)=>{
        axios.update("/api/summoners/:"+id,data)
        this.updateMatchlist(data.accountId)
      });
  },
  updateMatchlist: function(id){
    return axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${id}?api_key=${api_key}`)
      .then((data)=>{
        axios.update("/api/match/:"+id,data)
        data.matches.map((match)=>{
          this.updateMatchDetails(match.gameId)
        })
      });
  },
  updateMatchDetails: function(id){
    return axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matches/${id}/?api_key=${api_key}`)
      .then((data)=>{
        axios.update("/api/matchDetails/:"+id,data)
      });

  }
};
