const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const instituicao = await connection('instituicoes')
      .where('id', id)
      .select('nome')
      .first();

    if (!instituicao) {
      return response.status(400).json({ error: 'Nenhuma instituição foi encontrada para esse ID' });
    }

    return response.json(instituicao);
  }
}