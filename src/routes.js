const express = require('express')
const routes = express.Router()

const ClientesRoutes = require('./routes/ClientesRoutes')
const PedidosRoutes = require('./routes/PedidosRoutes')
const ProdutosRoutes = require('./routes/ProdutosRoutes')
const PedidoProdutosRoutes = require('./routes/PedidoProdutosRoutes')

routes.use('/clientes', ClientesRoutes)
routes.use('/produtos', ProdutosRoutes)
routes.use('/pedido-produtos', PedidoProdutosRoutes)
routes.use('/pedidos', PedidosRoutes)

module.exports = routes;