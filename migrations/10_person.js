
'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('person', table => {
    table.increments();
    table.string('name').notNullable();
    table.integer('client_id').notNullable().references('id').inTable('client').onDelete('CASCADE');
    table.integer('disclosure_id').notNullable().references('id').inTable('disclosure').onDelete('CASCADE');
    table.integer('age_id').notNullable().references('id').inTable('age').onDelete('CASCADE');
    table.integer('gender_id').notNullable().references('id').inTable('gender').onDelete('CASCADE');
    table.integer('category_id').notNullable().references('id').inTable('category').onDelete('CASCADE');
    table.integer('economic_id').notNullable().references('id').inTable('economic').onDelete('CASCADE');
    table.integer('education_id').notNullable().references('id').inTable('education').onDelete('CASCADE');
    table.integer('race_id').notNullable().references('id').inTable('race').onDelete('CASCADE');
    table.integer('frequency_id').notNullable().references('id').inTable('frequency').onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
  });
};

exports.down = function(knex, Promise) {
return knex.schema.dropTable('person');
};
