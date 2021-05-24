const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded);

app.use(adminRoutes);

app.use(shopRoutes);

app.listen(3000);
