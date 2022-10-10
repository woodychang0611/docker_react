var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

let ServerPort = process.env.ServerPort
console.log(ServerPort)

app.get('/date', function(req, res) {
  date = new Date()
  res.json({ date: date});
});


app.listen(ServerPort, function() {
  console.log(`Example app listening on port ${ServerPort}!`);
});