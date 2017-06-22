const express = require('express');
var app = express();
var mongoose = require('mongoose');

const PORT = 8080;

app.get('/login',function(req,res){

});

app.get('/selectAll',function(){
    db.collection.find()
});
var mysql = require('mysql');
app.get('/test',function(req,res){
   var con = mysql.createConnection({
       host: "localhost",
       user: "root",
       password: ""
   });    let query = 'SELECT * FROM ECOBITES.USERCOMMENTS;';    con.connect(function(err) {
       if (err) {
           console.log(err);
           throw err;
       }
       console.log("Connected!");
       con.query(query,function(err,result){
           console.log('Test select: '+err);
           //res.setHeader('content-type','application/json');
           res.send(result);
       });
   });});
app.get('/insertComment',function(req,res){
   console.log(req);
   var con = mysql.createConnection({
       host: "localhost",
       user: "root",
       password: ""
   });
   let query =
       "INSERT INTO ECOBITES.USERCOMMENTS (RESTAURANT_ID, ECO_RATINGS, BIO_RATINGS,COMMENT,COMMENT_USER,time_stamp) VALUES ('"
       +req.query.restaurant_id
       + "','"
       +req.query.eco_ratings
       +"','"
       +req.query.bio_ratings
       +"','"
       +req.query.comment
       +"','"
       +req.query.comment_user
       +"','"
       +req.query.time_stamp
       +"');";
console.log(query);
con.connect(function(err) {
     if (err) {
           console.log(err);
            throw err;
        }
        console.log("Connected!");
       con.query(query, callback);    
var callback = function(err2, result) {
           console.log('Insert query: '+err2);
           //TODO: another query to return new record

           // con.query(query1,
           //     function(err1, result1){
           //         //res.setHeader('content-type','application/json');
           //         console.log('json:', result1);
           //         res.send(result1);
           //     }
           // );
           res.setHeader('content-type','text/plain');
           res.send('Comment and ratings are posted');
           res.end();
      }; // end outer callback

   }); // end connect
});   
app.get('/stream',function(req,res){
   let query1 = "SELECT * FROM ECOBITES.USERCOMMENTS WHERE RESTAURANT_ID='"+req.query.restaurant_id
		+"' ORDER BY time_stamp LIMIT 1;"     
   console.log(query1);    var con = mysql.createConnection({
       host: "localhost",
       user: "root",
       password: ""
   });
   con.connect(function(err) {
       if (err) {
           console.log(err);
           throw err;
       }
       con.query(query1,function(err, result){
           //res.setHeader('content-type','application/json');
           res.send(result);
           res.end();
       });    });    
});
app.listen(PORT, function(){
    console.log("Listening to "+PORT);
})

