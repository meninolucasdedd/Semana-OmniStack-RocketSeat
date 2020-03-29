exports.up = function(knex) {
  return knex.schema.createTable("turmas", function(table) {
    table.increments();
    table.string("titulo").notNullable();
    table.string("descricao").notNullable();
    table.decimal("datas", 2).notNullable();
    table.string("objetivos").notNullable();
    table.string("conteudos").notNullable();

    table.string("instituicao_id").notNullable();

    table
      .foreign("instituicao_id")
      .references("id")
      .inTable("instituicoes");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("turmas");
};
