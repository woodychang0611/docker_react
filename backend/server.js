var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');
var app = express();

// create application/json parser
app.use(bodyParser.json())
app.use(cors());

let ServerPort = process.env.ServerPort
console.log(ServerPort)

app.get('/date', function(req, res) {
  date = new Date()
  console.log(`get date: ${date}`)
  res.json({date: date});
});


app.post('/get_value', function(req, res) {
  date = new Date()
  console.log(req.body)
  console.log(req.body.name)
  console.log(`get value`)
  res.json({status: 'OK'});
});

app.get('/info', function(req, res) {
  res.json({ info: process.env});
});


app.listen(ServerPort, function() {
  console.log(`Example app listening on port ${ServerPort}!`);
});