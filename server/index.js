const express = require('express');
const bodyParser = require('body-parser');
const board = require('../server/board');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

// serve up static landing page
app.get('/', function(req, res) {
  res.send('index.html');
});

app.get('/test', function(req, res) {
  console.log('got request');
  res.send(board);
});

app.listen(3000, () => {
  console.log('Checkertron ready to engage!');
});