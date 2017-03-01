'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('race', table => {
    table.increments();
    table.string('race').notNullable();

  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('race');
};
