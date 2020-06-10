const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchListSchema = new Schema({
  "_id": {
    "type": "String"
  },
  "matches": {
    "type": [
      "Mixed"
    ]
  }
});

const MatchList = mongoose.model("MatchList", matchListSchema);

module.exports = MatchList;
