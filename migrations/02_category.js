'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('category', table => {
    table.increments();
    table.string('category').notNullable();

  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('category');
};
