const express = require('express')

const pedidoProdutosRoutes = express.Router()

const PedidoProdutoController = require('../controllers/PedidoProdutoController')

pedidoProdutosRoutes.get('', PedidoProdutoController.index)
pedidoProdutosRoutes.post('', PedidoProdutoController.store)
pedidoProdutosRoutes.delete('/:id', PedidoProdutoController.delete)

module.exports = pedidoProdutosRoutes