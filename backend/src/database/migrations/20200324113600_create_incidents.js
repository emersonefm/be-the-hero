//npx knex migrate:latest

exports.up = function (knex) {
  return knex.schema.createTable('incidents', function (table) {
    //pk
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    
    //fk
    table.string('ong_id').notNullable();
    table.foreign('ong_id').references('id').inTable('ongs');
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('incidents');
};
