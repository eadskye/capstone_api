'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('frequency', table => {
    table.increments();
    table.string('frequency').notNullable();

  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('frequency');
};
