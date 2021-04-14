const express = require('express')

const pedidoRoutes = express.Router()

const PedidoController = require('../controllers/PedidoController')

pedidoRoutes.get('', PedidoController.index)
pedidoRoutes.post('', PedidoController.store)
pedidoRoutes.delete('/:id', PedidoController.delete)

module.exports = pedidoRoutes