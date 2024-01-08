const path = require('path');
const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin.js');
const rootDir = require('./util/path.js');

app.use(express.static(path.join(rootDir, 'public')));

// logger
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'resources', 'views'));

app.use(adminRoute);


app.use((req, res, next) => {
  res.status(404).send('404 not found');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
