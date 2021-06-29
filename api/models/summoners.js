const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const summonersSchema = new Schema({
  "accountId": {
    "type": "String"
  },
  "id": {
    "type": "String"
  },
  "_id": {
    "type": "String"
  },
  "profileIconId": {
    "type": "Number"
  },
  "puuid": {
    "type": "String"
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
