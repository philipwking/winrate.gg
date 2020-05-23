const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const summonersSchema = new Schema({ any: Schema.Types.Mixed });

const Summoners = mongoose.model("Summoners", summonersSchema);

module.exports = Summoners;
