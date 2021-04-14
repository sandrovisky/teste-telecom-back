const express = require('express')

const usuarioRoutes = express.Router()

const UsuarioController = require('../controllers/UsuarioController')

usuarioRoutes.get('', UsuarioController.index)
usuarioRoutes.post('', UsuarioController.store)
usuarioRoutes.delete('/:id', UsuarioController.delete)

module.exports = usuarioRoutes