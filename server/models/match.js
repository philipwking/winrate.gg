const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema({ any: Schema.Types.Mixed });

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
