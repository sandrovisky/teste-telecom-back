const Pedido = require('../model/Pedido')

module.exports = {

    async index(req, res){
        const result =  await Pedido.findAll({ include: [
            {
                association: 'produtos'
            }
        ]})
        return res.json(result)
    },

    async delete(req, res){

        await Pedido.destroy({ where: req.params })
        .then(async response => {
            return res.json({ message: "deletado com sucesso"})
        })
    },

    async store(req, res){
        const { 
            idCliente,
            valorTotal
        } = req.body        
        
        await Pedido.create({ idCliente, valorTotal })
        .then(response => {
            return res.status(200).json(response)
        })
    }
}


