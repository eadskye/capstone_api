
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');


router.get('/', function(req, res, next) {
  console.log('Hello');

});

module.exports = router;
