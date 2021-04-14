const PedidoProduto = require('../model/PedidoProduto')

module.exports = {

    async index(req, res){
        const result =  await PedidoProduto.findAll()
        return res.json(result)
    },

    async delete(req, res){

        await PedidoProduto.destroy({ where: req.params })
        .then(async response => {
            return res.json({ message: "deletado com sucesso"})
        })
    },

    async store(req, res){
        const { 
            idPedido, idProduto
        } = req.body 

        await PedidoProduto.create({ idPedido, idProduto })
        .then(response => {
            return res.status(200).json(response)
        })
    }
}


