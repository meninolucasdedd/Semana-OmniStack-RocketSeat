const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection('turmas')
      .count()
    response.header('X-Total-Count', count['count(*)']);


    const turmas = await connection('turmas')
      .join('instituicoes', 'instituicoes.id', '=', 'turmas.instituicao_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select(
        'turmas.*',
        'instituicoes.nome',
        'instituicoes.email',
        'instituicoes.uf',
        'instituicoes.cidade',
        'instituicoes.endereco',
        'instituicoes.cnpj',
        'instituicoes.site',
        'instituicoes.bio');
    return response.json(turmas);

  },

  async create(request, response) {
    const { titulo, descricao, datas, objetivos, conteudos } = request.body

    const instituicao_id = request.headers.authorization;

    const [id] = await connection('turmas').insert({
      titulo,
      descricao,
      datas,
      objetivos,
      conteudos,
      instituicao_id
    });

    return response.json({ id })
  },


  async delete(request, response) {
    const { id } = request.params;
    const instituicao_id = request.headers.authorization;

    const turma = await connection('turmas')
      .where('id', id)
      .select('instituicao_id')
      .first();

    if (turma.instituicao_id != instituicao_id) {
      return response.status(401).json({ error: 'Opa! Você não tem autorização para fazer isso.' });

    }

    await connection('turmas').where('id', id).delete();
    return response.status(204).send();


  }
}