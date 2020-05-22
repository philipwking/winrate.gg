const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  id: { type: String, required: true },
  platformId: { type: String, required: true },
  gameId: { type: Number, required: true },
  champion: { type: Number, required: true },
  queue: { type: Number, required: true },
  season: { type: Number, required: true },
  timestamp: { type: Number, required: true },
  role: { type: String, required: true },
  lane: { type: String, required: true },
  details: {type: mongoose.Schema.Types.ObjectId,ref:'MatchDetails'}
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
