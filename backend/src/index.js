const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
//executa npm install

//Antes das requisições, express converter recebido em json para objeto js
app.use(cors());
/**
 * app.use(cors({origin:"http://meuapp.com"}))
 */
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * Rota (localhost:3000) / Recurso (/users)
 */

/**
 * Bancos de dados: SQL, NoSQL.
 * SQLite
 * 
 * Driver: SELECT * FROM users
 * Query Builder (JS): table('users').select('*').where()
 */

