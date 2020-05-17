const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const summonerSchema = new Schema({
  id: { type: String, required: true },
  accountId: { type: String, required: true },
  puuid: { type: String, required: true },
  name: { type: String, required: true },
  profileIconId: { type: Number, required: true },
  revisionDate: { type: Number, required: true },
  summonerLevel: { type: Number, required: true }
});

const Summoner = mongoose.model("Summoner", summonerSchema);

module.exports = Summoner;
