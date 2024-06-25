const express = require('express')
const logger = require('./logger.js')
const app = express();


app.get('/', logger, (req, res) => {

  res.send("<h1>Home</h1><a href='./about'>Click</a>");
});

app.get('/about', logger, (req, res) => {
  res.send('ABout')
});

app.listen(5000);