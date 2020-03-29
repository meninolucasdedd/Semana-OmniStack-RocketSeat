const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {


  async index(request, response) {
    const instituicoes = await connection('instituicoes').select('*');

    return response.json(instituicoes);
  },

  async create(request, response) {
    const { nome, cnpj, uf, cidade, endereco, email, site, bio } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('instituicoes').insert({
      id,
      nome,
      cnpj,
      uf,
      cidade,
      endereco,
      email,
      site,
      bio
    })

    return response.json({ id });
  }
}