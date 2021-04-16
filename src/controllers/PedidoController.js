const Pedido = require('../model/Pedido')
const PedidoProduto = require('../model/PedidoProduto')

module.exports = {

    async index(req, res){
        const result =  await Pedido.findAll({ include: [
            {
                association: 'produtos',
                include: [
                    {
                        association: 'produto'
                    }
                ]
            },
            {
                association: 'cliente'
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
            valorTotal,
            produtos
        } = req.body        
        
        const pedido = await Pedido.create({ idCliente, valorTotal })
        .then(response => {
            return response
        })

        produtos.map(async produto => {
            await PedidoProduto.create({ idPedido: pedido.id, idProduto: produto })
        })

        return res.status(200).json(pedido)
    }
}


