
'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('client', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('password').notNullable();
    table.integer('satisfaction').notNullable();
    table.integer('diversity').notNullable();
    table.decimal('score').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('client');
};
