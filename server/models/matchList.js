const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchListSchema = new Schema({
    "matches": {
      "type": [
        "Mixed"
      ]
    },
    "startIndex": {
      "type": "Number"
    },
    "endIndex": {
      "type": "Number"
    },
    "totalGames": {
      "type": "Number"
    }
  });

const MatchList = mongoose.model("MatchList", matchListSchema);

module.exports = MatchList;
