var express = require('express');
var cors = require('cors');
const fs = require('fs');
var app = express();


// create application/json parser
app.use(express.json())
app.use(cors());

const db = new Map()
db.set("default","default value")

let ServerPort = process.env.ServerPort

//Speed up docker compose down
process.on('SIGTERM', () => {
  // Handle cleanup here
  console.log('SIGTERM received. Shutting down gracefully.');
  process.exit(0);
});


if(undefined == ServerPort){
  defaultServerPort=3456
  console.log('ServerPort not defined use defualt ${defaultServerPort}')
  ServerPort=defaultServerPort
}

app.get('/GET/date', function(req, res) {
  date = new Date()
  console.log(`get date: ${date}`)
  res.json({date: date});
});

app.get('/GET/info', function(req, res) {
  res.json({ info: process.env});
});

app.get('/GET/users/', function(req, res) {
  const users = JSON.parse(fs.readFileSync('./defaultUsers.json', 'utf8'));
  res.json({users:users});

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