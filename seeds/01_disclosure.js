'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('disclosure').del()
    .then(function () {
      // Inserts seed entries
      return knex('disclosure').insert([
        {id: 1,
          rating: '1'},

      ]);
    });
};
