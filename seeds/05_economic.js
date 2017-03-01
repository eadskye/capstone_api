
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('economic').del()
    .then(function () {
      // Inserts seed entries
      return knex('economic').insert([
        {id: 1,
          level: 'lower'}

      ]);
    });
};
