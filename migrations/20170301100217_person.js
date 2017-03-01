
'use strict';
exports.up = function(knex, Promise) {
  // return knex.schema.createTable('person', table => {
  //   table.increments();
  //   table.string('name').notNullable();
  //   table.integer('client_id').notNullable();
  //   table.integer('satisfaction').notNullable();
  //   table.integer('diversity').notNullable();
  //   table.decimal('score').notNullable();
  //   table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
  //   table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
  // });
};

exports.down = function(knex, Promise) {
// return knex.schema.dropTable('person');
};
