const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('This code always runs');
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log('in another the middleware');
  res.send('<h1>Add product page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('in another the middleware');
  res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);
