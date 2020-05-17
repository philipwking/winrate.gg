const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const detailsSchema = new Schema({
    gameId: { type: Number, required: true },
    platformId: { type: String, required: true },
    gameCreation: { type: Number, required: true },
    gameDuration: { type: Number, required: true },
    queueId: { type: Number, required: true },
    mapId: { type: Number, required: true },
    seasonId: { type: Number, required: true },
    gameVersion: { type: String, required: true },
    gameMode: { type: String, required: true },
    gameType: { type: String, required: true },
    // teams: { type: String, required: true },
    // participants: { type: String, required: true },
    // participantIdentities: { type: String, required: true }
});

const matchDetails = mongoose.model("matchDetails", detailsSchema);

module.exports = matchDetails;
