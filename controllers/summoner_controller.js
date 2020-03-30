var express = require("express");

var router = express.Router();

var summoner = require("../models/summoner.js");

router.get("/", function (req, res) {
  res.render("index")
});

router.get("/:username", function(req,res){
  summoner.all(req.params.username,function (data) {
    var hbsObject = {
      games: data
    };
    res.render("index", hbsObject);
  });
})


router.post("/api/summoners", function (req, res) {
  // adding summoner to summoners list
  summoner.create("summoners",["summoner_name","summoner_id"], [req.body.summoner_name,req.body.summoner_id], function (result) {
    // creating a table named after summoner to add games list to
    summoner.createTable(req.body.summoner_name, function (result) {
      res.end()
    });
  })
});

router.post("/api/summoners/:username", function (req, res) {

  summoner.create(req.params.username,
    ["gameId","time","win","kills","deaths","assists","champion"],
    [req.body.gameId,req.body.time,req.body.win,req.body.kills,req.body.deaths,req.body.assists,req.body.champion],
    function (result) {
      res.end();

    }
  );
});

module.exports = router;
