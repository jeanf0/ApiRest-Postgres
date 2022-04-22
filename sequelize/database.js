const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    host: 'localhost',
    database: 'postgres',
    username: 'postgres',
    password: '123456',
    dialect: 'postgres',
    port: 5432,
    logging: (...msg) => console.log(msg)
})

// const sequelize = new Sequelize('postgres://postgres:123456@localhost:5432/postgres') 

module.exports = sequelize

// test database connection

async function test() {
    try {
        let result = sequelize.authenticate()
        console.log("Sequelize iniciou a conexão com o banco")


    } catch (error) {
        console.error("Houve um errro ao conectar com o banco")
        console.error(error)
        process.exit()
        
    }
}

test()

const models = require('./models')

//criar e sincronizar banco
async function create(){
    await models.sequelize.sync({force: true})
    await models.sequelize.close()
  
    console.log("Banco sincronizado");
  }
//   create()