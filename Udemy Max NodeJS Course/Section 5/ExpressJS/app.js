const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('in the middleware');
  next(); //alows the request to continue to the next middleware
});

app.use((req, res, next) => {
  console.log('in another the middleware');
  res.send('<h1>Hello from Express</h1>');
});
const server = http.createServer();

server.listen(3000);
