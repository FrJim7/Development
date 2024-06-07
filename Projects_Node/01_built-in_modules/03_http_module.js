const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/' ) {
    res.end("Home Page")
    return;
  }
  if (req.url == '/about') {
    res.end("About Page");
    return;
  }
  res.end(`
  <h1>Oops!</h1>
  <p>Are you lost</p>
  <a href="/">Go Back Home!</a>
  `);
});

server.listen(8000);