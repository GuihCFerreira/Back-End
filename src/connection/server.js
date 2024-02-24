const express = require('express');
const cors = require('cors');
const db = require('../database/connectDb');

const server = express();

server.use(cors());
server.use(express.json());

server.use(
    express.urlencoded({
        extended: true
    })
);

const initServer = ()=> {
    db.connectDatabase();
    server.listen(3001,()=> console.log("Rodando na porta 3001"));
}

module.exports={initServer};