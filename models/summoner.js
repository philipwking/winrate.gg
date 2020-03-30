var orm = require("../config/orm.js");

var summoner = {
  all: function(table, cb) {
    orm.all(table, function(res) {
      cb(res);
    });
  },
  create: function(table, cols, vals, cb) {
    orm.create(table, cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("summoners", objColVals, condition, function(res) {
      cb(res);
    });
  },
  createTable: function(summoner_name, cb) {
    orm.createTable(summoner_name, function(res){
      cb(res)
    })
  }
};

module.exports = summoner;
