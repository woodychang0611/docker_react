var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());

app.get('/date', function(req, res) {
  date = new Date()
  res.json({ date: date});
});


app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});