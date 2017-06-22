var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/maintable", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});

module.exports = MongoClient;