const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
  console.log('in 1st middleware');
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log('in 2nd middleware');
  res.send('<h1>Reponse 1 from second middleware</h1>');
});

app.use('/users', (req, res, next) => {
  res.send('<h1>Dummuy Response from /users</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Dummuy Response from /</h1>');
});

app.listen(3000);
