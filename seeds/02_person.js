
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('person').del()
    .then(function () {
      // Inserts seed entries
      return knex('person').insert([
        {id: 1,
          client_id: '1',
          name: 'Liz',
          disclosure_id: '1',
          category_id: '1',
          age_id: '1',
          gender_id: '1',
          economic_id:'1',
          education_id: '1',
          race_id: '1',
          frequency_id:'1'
          },

      ]);
    });
};
