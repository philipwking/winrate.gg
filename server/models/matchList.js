const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchListSchema = new Schema({
    username: { type: String, required: true },
    matches: { type: Array, required: true}
});

const MatchList = mongoose.model("MatchList", matchListSchema);

module.exports = MatchList;
