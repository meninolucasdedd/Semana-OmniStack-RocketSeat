const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const instituicao_id = request.headers.authorization;

    const turmas = await connection('turmas').where('instituicao_id', instituicao_id)
      .select('*');

    return response.json(turmas)
  }
}