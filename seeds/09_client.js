'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('client').del()
    .then(function () {
      // Inserts seed entries
      return knex('client').insert([
        {id: 1,
          name: 'Ariel RK',
          password: 'trashcan',
          satisfaction: '4',
          diversity: '1',
          score: '.50'
        },

      ]);
    });
};
