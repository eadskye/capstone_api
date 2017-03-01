
'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('disclosure', table => {
    table.increments();
    table.integer('rating').notNullable();
      
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('disclosure');
};
