const models = require('../../sequelize/models')

const userRoute = async (app) => {
    app.route('/users/:id?')
        .get(async (req, res) => {
            const id = req.params.id
            console.log(id)
            if(id) {
                    const users = await models.pessoa.findOne({
                        where: { id: id }
                    })

                    if(users != null){
                        return res.send({ users })
                    } else {
                        return res.status(400).send("User ID não existe")
                    }
            }
                const users = await models.pessoa.findAll()
                return res.send({ users })
        })
        .post(async (req, res) => {

            if(req.body.nome == ''){
                return res.status(400).send("Falha ao criar usuario")
            }

            try {
                await models.pessoa.create(req.body)
                return res.status(201).send("OK")
            } catch (error) {
                return res.status(400).send("Falha ao criar usuario")
            }
        })
        .put(async (req, res) => {
            const { id } = req.params
            if(!id) {
                return res.status(400).send("User ID esta faltando")
            }

            const user = req.body
            
            try {
                await models.pessoa.update(  user , {
                    where: {
                        id: id
                    }
                })
                return res.status(201).send("OK")
            } catch (error) {
                return res.status(400).send("Falha ao editar usuario", error)
            }
        })
        .delete(async (req, res) => {
            const { id } = req.params
            if(!id) {
                return res.status(400).send("User ID esta faltando")
            }

            const users = await models.pessoa.findOne({
                where: { id: id }
            })

            if(users == null){
                return res.status(400).send("User ID não existe")
            }

            try {
                await models.pessoa.destroy({
                    where: {
                        id: id
                    }
                })
                return res.status(201).send("OK")
            } catch (error) {
                return res.status(400).send("Falha ao editar usuario", error)
            }
        })
        
}

module.exports = userRoute