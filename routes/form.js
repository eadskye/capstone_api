'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');






// router.post('/', (req, res, next) => {
//
//   knex('person')
//     .insert({
//       id: req.body.id,
//       age: req.body.age_id,
//       relationship: req.body.category_id,
//       frequency: req.body.frequency_id,
//       gender: req.body.gender_id,
//       race: req.body.race_id,
//       education: req.body.education_id,
//       economic: req.body.economic_id,
//       disclosure: req.body.disclosure_id
//
//     }, ['id', 'age', 'relationship', 'frequency', 'gender', 'race', 'education', 'economic', 'disclosure'])
//     .then((person) => {
//
//       res.send(person[0]);
//     })
//     .catch((err) => {
//       next(err);
//     });
//
// });

// module.exports= router;
