const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sale();

myEmitter.on('newsale', () => {
  console.log('There was a new sale!');
});

myEmitter.on('newsale', () => {
  console.log('Consumer name: Andrei');
});

myEmitter.on('newsale', (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});

myEmitter.emit('newSale', 9);

////////////////

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request resieved');
  console.log(req.url);
  res.end('Request recieved');
});

server.on('request', (req, res) => {
  console.log('Another request :)');
});

server.on('close', (req, res) => {
  console.log('Server closed');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting for request');
});
