'use strict';

const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false }));

const client = require('./routes/client');

console.log('>>> About to start', client);

app.use('/client', client);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
