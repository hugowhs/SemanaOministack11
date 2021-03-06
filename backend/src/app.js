const express = require('express');
const cors = require('cors');
const routes = require("./routes");
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
/*
    Rota / Recursos

    Métodos HTTP:

    GET: Buscar/Listar uma informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DEKETE: Deletar uma informação no back-end

    Tipos de parâmetros:

    Querry Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
    Route Params: Parâmetros utilizados para identificar recursos
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

    Banco de dados:

    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB, etc

    Driver: SELECT * FROM users
    Query Builder: table('users').select('*').where()
    
*/
app.use(errors());

module.exports = app;