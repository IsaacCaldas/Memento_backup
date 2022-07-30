exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary()
    table.string('description').notNull()
    table.boolean('done').defaultTo(false).notNull()
    table.datetime('estimated_at')
    table.datetime('created_at')
    table.datetime('updated_at')
    table.integer('user_id').references('id')
      .inTable('users').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks')
};
