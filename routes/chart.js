// 'use strict';
//
// const express = require('express');
// const router = express.Router();
// const knex = require('../knex');
//
//
// router.get('/:client_id', (req, res, next) => {
//     const id = Number.parseInt(req.params.id);
//     if (isNaN(id)) {
//       return next();
//     }
//     knex('client')
//       .select('id', 'name', 'satisfaction', 'diversity', 'score')
//       .where('id', req.params.id)
//       .first()
//       .then((client) => {
//         res.send(client);
//       })
//       .catch((err) => {
//         next(err);
//       });
// });
// module.exports = router;
//
//
// router.get('/person', (req, res, next) => {
//     const id = Number.parseInt(req.params.id);
//     if (isNaN(id)) {
//       return next();
//     }
//     knex('person')
//       .select('id', 'age_id', 'gender_id', 'race_id', 'economic_id', 'education_id', 'disclosure_id')
//       .where('id', req.params.id)
//       .first()
//       .then((person) => {
//         res.send(person);
//       })
//       .catch((err) => {
//         next(err);
//       });
// });
// module.exports = router;
