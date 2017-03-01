'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('age', table => {
    table.increments();
    table.integer('age').notNullable();

  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('age');
};
