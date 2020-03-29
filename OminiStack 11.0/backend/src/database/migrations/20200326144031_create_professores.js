exports.up = function (knex) {
  return knex.schema.createTable("professores", function (table) {
    table.string("id").primary();
    table.string("nome").notNullable();
    table.string("sobrenome").notNullable();
    table.string("uf", 2).notNullable();
    table.string("cidade").notNullable();
    table.string("endereco").notNullable();
    table.string("email").notNullable();
    table.string("usuario").notNullable();
    table.string("senha").notNullable();
    table.string("instituicao").notNullable();
    table.string("habilitacao").notNullable();
    table.string("bio").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("professores");
};
