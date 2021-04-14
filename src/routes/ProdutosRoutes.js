const express = require('express')

const produtosRoutes = express.Router()

const ProdutoController = require('../controllers/ProdutoController')

produtosRoutes.get('', ProdutoController.index)
produtosRoutes.post('', ProdutoController.store)
produtosRoutes.delete('/:id', ProdutoController.delete)

module.exports = produtosRoutes