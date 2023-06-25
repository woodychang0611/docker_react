var express = require('express');
var cors = require('cors');
var app = express();


// create application/json parser
app.use(express.json())
app.use(cors());

const db = new Map()

let ServerPort = process.env.ServerPort

app.get('/GET/date', function(req, res) {
  date = new Date()
  console.log(`get date: ${date}`)
  res.json({date: date});
});

app.get('/GET/info', function(req, res) {
  res.json({ info: process.env});
});

app.get('/GET/users/:name', function(req, res) {
  const name = req.params.name;
  console.log(`get users with name ${name}`)
  if (!db.has(name))
  {
    res.status(404).json({error:`User ${name} not found`})
  }
  const value = db.get(name)
  res.json({name:name,value:value,dummy:"dummy",status: 'OK'});
});

app.post('/POST/users/:name', function(req, res) {
  const name = req.params.name;
  const value = req.body.value
  console.log(`post user wuth name ${name} and value ${value}`)
  if (db.has(name))
  {
    res.status(409).json({error:`User ${name} already exists!`})
  }  
  if (!value)
  {
    res.status(400).json({error:`Value is required`})
  }
  db.set(name,value)
  res.json({name:name, value:value, status: 'OK'});
});

app.put('/PUT/users/:name', function(req, res) {
  const name = req.params.name
  const value = req.body.value
  console.log(`put user wuth name ${name} value ${value}`) 
  if (! db.has(name))
  {
    res.status(404).json({error:`User ${name} not found`})
  }
  if (!value)
  {
    res.status(400).json({error:`Value is required`})
  }
  db.set(name,value)
  res.json({name:name, value:value,status: 'OK'});
});

app.delete('/DELETE/users/:name', function(req, res) {
  const name = req.params.name;
  console.log(`delete user ${name}`) 
  if (! db.has(name))
  {
    res.status(404).json({error:`User ${name} not found`})
  }
  db.delete(name)
  res.json({name:name, status: 'OK'});
});

app.listen(ServerPort, function() {
  console.log(`app listening on port ${ServerPort}!`);
});