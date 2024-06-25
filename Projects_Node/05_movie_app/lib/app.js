const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./app'));

//app.get('/', (req, res) => {
  //res.sendFile(path.resolve(__dirname, './app/index.html'));
//});

app.all('*', (req, res) => {
  res.status(404).send('Resource not found');
}) 

app.listen(5000, () => {
  console.log('Listening to port: 5000');
});

