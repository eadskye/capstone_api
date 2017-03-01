'use strict';

const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false }));


const form = require('./routes/main');

app.use('/main', form);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
