
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gender').del()
    .then(function () {
      // Inserts seed entries
      return knex('gender').insert([
        {id: 1,
          gender: 'female'},

      ]);
    });
};
