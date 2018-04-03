const express = require('express');
const logger = require('./logger');
//const morgan = require('morgan');
//const moment = require('moment-timezone');
//const fs = require('fs');
//const path = require('path');

const app = express();
const port = 9002;

//// Middleware ////
app.use(logger());

//// Routes ////
app.get('/', (req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send('<h1>Your IP is '+ ip + '</h1>');
});

app.listen(port, () => {
  console.log('Server started on port ', port);
});
