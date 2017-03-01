
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('education').del()
    .then(function () {
      // Inserts seed entries
      return knex('education').insert([
        {id: 1,
          education: 'Bachelors Degree'},

      ]);
    });
};
