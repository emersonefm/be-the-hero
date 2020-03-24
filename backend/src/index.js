const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors({
  //origin: 'http://meuapp.com.br'
}));

app.use(express.json());
app.use(routes);


/**
 * Rota / Recurso
 */


/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação no back-end
*  POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informção no back-end
 */


/**
 * Tipos de parâmetros
 * 
 * Query: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos (/users/:id)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsfot SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select(*).where()
 *  npm install knex
 */




app.listen(3333);
