


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchDetailsSchema = new Schema({ any: Schema.Types.Mixed });

const MatchDetails = mongoose.model("MatchDetails", matchDetailsSchema);

module.exports = MatchDetails;
