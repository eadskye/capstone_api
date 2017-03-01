
'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('person', table => {
    table.increments();
    table.string('name').notNullable();
    table.integer('client_id').notNullable().references('id').inTable('client').onDelete('CASCADE');
    table.integer('disclosure_id').notNullable().references('id').inTable('disclosure').onDelete('CASCADE');
    table.integer('age_id').notNullable();
    table.integer('gender_id').notNullable();
    table.integer('category_id').notNullable();
    table.integer('economic_id').notNullable();
    table.integer('education_id').notNullable();
    table.integer('race_id').notNullable();
    table.integer('frequency_id').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('person');
};
