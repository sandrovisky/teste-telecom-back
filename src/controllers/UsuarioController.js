const Usuario = require('../model/Usuario')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports = {

    async index(req, res){
        const result =  await Usuario.findAll()
        return res.json(result)
    },

    async delete(req, res){

        await Usuario.destroy({ where: req.params })
        .then(async response => {
            return res.json({ message: "deletado com sucesso"})
        })
    },

    async store(req, res){
        const { 
            usuario, 
            telefone,
            dataNascimento,
            senha
        } = req.body        
        
        if(await Usuario.findOne({ where: { usuario } }))
            return res.status(400).json({ message: "Usuario ja cadastrado."})
        
        const senhaHash = bcrypt.hashSync(senha, 10)

        await Usuario.create({ usuario, telefone, dataNascimento, senha: senhaHash })
        .then(response => {
            return res.status(200).json(response)
        })
    }
}


