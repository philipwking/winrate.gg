const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const summonerSchema = new Schema({
  username: { type: String, required: true },
  id: { type: String, required: true }
});

const Summoner = mongoose.model("Summoner", summonerSchema);

module.exports = Summoner;
