
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('age').del()
    .then(function () {
      // Inserts seed entries
      return knex('age').insert([
        {id: 1,
          age: 35},

      ]);
    });
};
