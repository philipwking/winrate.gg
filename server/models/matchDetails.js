


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchDetailsSchema = new Schema({
    id: { type: String, required: true }
});

const MatchDetails = mongoose.model("MatchDetails", matchDetailsSchema);

module.exports = MatchDetails;
