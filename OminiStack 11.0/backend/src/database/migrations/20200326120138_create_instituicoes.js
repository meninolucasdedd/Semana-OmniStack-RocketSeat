exports.up = function(knex) {
  return knex.schema.createTable("instituicoes", function(table) {
    table.string("id").primary();
    table.string("nome").notNullable();
    table.string("cnpj").notNullable();
    table.string("uf", 2).notNullable();
    table.string("cidade").notNullable();
    table.string("endereco").notNullable();
    table.string("email").notNullable();
    table.string("site").notNullable();
    table.string("bio").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("instituicoes");
};
