const sequelize = require('../database')

const models = {
    pessoa: require('./pessoa'),
    sequelize: sequelize
}

module.exports = models