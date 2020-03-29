const express = require("express");

const InstituicaoController = require('./controllers/InstituicaoController');
const TurmaController = require('./controllers/TurmaController');
const PerfilController = require('./controllers/PerfilController');
const SessaoController = require('./controllers/SessaoController');


const routes = express.Router();

routes.post('/sessoes', SessaoController.create);

routes.get('/instituicoes', InstituicaoController.index);
routes.post('/instituicoes', InstituicaoController.create);

routes.get('/perfil', PerfilController.index);

routes.get('/turmas', TurmaController.index);
routes.post('/turmas', TurmaController.create);
routes.delete('/turmas/:id', TurmaController.delete);



module.exports = routes;
