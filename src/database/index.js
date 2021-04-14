const Sequelize = require('sequelize')
const dbConfig = require ('../config/database')

const Usuario = require('../model/Usuario')
const Pedido = require('../model/Pedido')
const Produto = require('../model/Produto')
const PedidoProduto = require('../model/PedidoProduto')

const connection = new Sequelize(dbConfig)

Usuario.init(connection)
Produto.init(connection)
Pedido.init(connection)
PedidoProduto.init(connection)

Pedido.associate(connection.models)
PedidoProduto.associate(connection.models)

module.exports = connection