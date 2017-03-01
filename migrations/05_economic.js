'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('economic', table => {
    table.increments();
    table.string('level').notNullable();

  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('economic');
};
