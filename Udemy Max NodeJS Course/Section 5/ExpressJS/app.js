const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);
