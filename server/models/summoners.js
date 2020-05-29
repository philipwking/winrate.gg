const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const summonersSchema = new Schema({
    "_id": {
      "type": "String"
    },
    "id": {
      "type": "String"
    },
    "accountId": {
      "type": "String"
    },
    "puuid": {
      "type": "String"
    },
    "profileIconId": {
      "type": "Number"
    },
    "revisionDate": {
      "type": "Number"
    },
    "summonerLevel": {
      "type": "Number"
    }
  }
);

const Summoners = mongoose.model("Summoners", summonersSchema);

module.exports = Summoners;
