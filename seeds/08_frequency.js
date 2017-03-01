
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('frequency').del()
    .then(function () {
      // Inserts seed entries
      return knex('frequency').insert([
        {id: 1,
          frequency: 'monthly'},

      ]);
    });
};
