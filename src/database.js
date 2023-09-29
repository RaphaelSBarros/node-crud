const { Sequelize } = require('sequelize');
const { development } = require('./config');

// CREATE DATABASE exemplo;

// USE exemplo;

// CREATE TABLE pessoas (

//  id INT AUTO_INCREMENT PRIMARY KEY,

//  nome VARCHAR(255) NOT NULL,

//  email VARCHAR(255) NOT NULL UNIQUE,

//  senha VARCHAR(255)

// );

 

// INSERT INTO pessoas (nome, email, senha)

//  VALUES ('João da Silva', 'joao@example.com', 'senha123');

const sequelize = new Sequelize(development);

sequelize.sync()
    .then(() => {
        console.log('conectado ao banco com sucesso')
    })
    .catch((error) => {
        console.error('não conectou ao banco de dados', error)
    })

module.exports = sequelize;