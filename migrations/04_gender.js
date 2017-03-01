'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('gender', table => {
    table.increments();
    table.string('gender').notNullable();

  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('gender');
};
