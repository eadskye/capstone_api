
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('race').del()
    .then(function () {
      // Inserts seed entries
      return knex('race').insert([
        {id: 1,
          race: 'White, non Hispanic'},

      ]);
    });
};
