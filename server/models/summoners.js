const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const summonersSchema = new Schema({
    username: { type: String, required: true },
    id: { type: String, required: true }
});

const Summoners = mongoose.model("Summoners", summonersSchema);

module.exports = Summoners;
