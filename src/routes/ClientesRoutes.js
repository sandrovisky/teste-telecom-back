const express = require('express')

const clienteRoutes = express.Router()

const ClienteController = require('../controllers/ClienteController')

clienteRoutes.get('', ClienteController.index)
clienteRoutes.post('', ClienteController.store)
clienteRoutes.delete('/:id', ClienteController.delete)

module.exports = clienteRoutes