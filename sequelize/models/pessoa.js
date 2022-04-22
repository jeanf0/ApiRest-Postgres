const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('../database')

const Pessoa = sequelize.define('pessoa', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Pessoa