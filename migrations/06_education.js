'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('education', table => {
    table.increments();
    table.string('education').notNullable();

  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('education');
};
