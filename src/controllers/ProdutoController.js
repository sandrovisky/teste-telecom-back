const Produto = require('../model/Produto')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

module.exports = {

    async index(req, res){
        const result =  await Produto.findAll()
        return res.json(result)
    },

    async delete(req, res){

        await Produto.destroy({ where: req.params })
        .then(async response => {
            return res.json({ message: "deletado com sucesso"})
        })
    },

    async store(req, res){
        const { 
            nome, valor
        } = req.body        
        
        if(await Produto.findOne({ where: { nome } }))
            return res.status(400).json({ message: "Produto ja cadastrado."})

        await Produto.create({ nome, valor })
        .then(response => {
            return res.status(200).json(response)
        })
    }
}


