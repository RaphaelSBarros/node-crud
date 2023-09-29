const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Pessoa = sequelize.define('pessoas', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        unique: true,
        type: DataTypes.STRING,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
});

module.exports = Pessoa;