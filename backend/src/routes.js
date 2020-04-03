const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete)


module.exports = routes;

/**
 * node Métodos HTTP:
 * 
 * GET: Buscar informação no back
 * POST: Criar informação no back
 * PUT: Alterar informação no back
 * DELETE: Deletar informação no back
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query: Parâmetros nomeados enviados na rota após "?" 
  *     (filtros, paginação) /users?page=2&name=Welli&idade=19
  *     const params = request.query
  * Route Params: Utilizados para identificar recursos /users/:id (no get:   /users/1) 
  *     const id = request.params
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  *     const body = request.body   
  */
