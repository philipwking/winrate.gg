


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchDetailsSchema = new Schema({
  "_id": {
    "type": "Number"
  },
  "gameId": {
    "type": "Number"
  },
  "platformId": {
    "type": "String"
  },
  "gameCreation": {
    "type": "Number"
  },
  "gameDuration": {
    "type": "Number"
  },
  "queueId": {
    "type": "Number"
  },
  "mapId": {
    "type": "Number"
  },
  "seasonId": {
    "type": "Number"
  },
  "gameVersion": {
    "type": "String"
  },
  "gameMode": {
    "type": "String"
  },
  "gameType": {
    "type": "String"
  },
  "teams": {
    "type": [
      "Mixed"
    ]
  },
  "participants": {
    "type": [
      "Mixed"
    ]
  },
  "participantIdentities": {
    "type": [
      "Mixed"
    ]
  }
});

const MatchDetails = mongoose.model("MatchDetails", matchDetailsSchema);

module.exports = MatchDetails;
