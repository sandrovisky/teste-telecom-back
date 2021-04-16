const Cliente = require('../model/Cliente')

module.exports = {

    async index(req, res){
        const result =  await Cliente.findAll()
        return res.status(200).json(result)
    },

    async delete(req, res){

        const { id } = req.params

        await Cliente.destroy({ where: id })
        .then(async response => {
            return res.json({ message: "deletado com sucesso"})
        })
    },

    async store(req, res){
        const { 
            nome, 
            telefone,
            dataNascimento,
        } = req.body        
        
        if(await Cliente.findOne({ where: { nome } }))
            return res.status(400).json({ message: "Cliente ja cadastrado."})

        if(await Cliente.findOne({ where: { telefone } }))
            return res.status(400).json({ message: "Telefone ja cadastrado."})

        await Cliente.create({ nome, telefone, dataNascimento })
        .then(response => {
            return res.status(200).json(response)
        })
    }
}


