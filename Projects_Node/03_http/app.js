const http = require('http');
const { readFileSync } = require('fs');

// get html file
const homePage = readFileSync('./temp_app/index.html');


const server = http.createServer((req, res) => {
  const url = req.url;

  /* Home Page */
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
    return;
  }
  /* About Page */
  if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>About Page</h1>');
    res.end();
    return;
  }
  /* 404 */
  res.writeHead(404, { 'content-type': 'text/html' });
  res.write('<h1>404</h1><h2>Page not found</h2>');
  res.end();
});

server.listen(5000); 