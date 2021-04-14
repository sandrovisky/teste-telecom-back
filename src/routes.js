const express = require('express')
const routes = express.Router()

const UsuariosRoutes = require('./routes/UsuariosRoutes')
const LoginRoutes = require('./routes/LoginRoutes')
const PedidosRoutes = require('./routes/PedidosRoutes')
const ProdutosRoutes = require('./routes/ProdutosRoutes')
const PedidoProdutosRoutes = require('./routes/PedidoProdutosRoutes')

const auth = require('./middlewares/auth')

routes.use('/usuarios', UsuariosRoutes)
routes.use('/produtos', ProdutosRoutes)
routes.use('/pedido-produtos', PedidoProdutosRoutes)
routes.use('/pedidos', PedidosRoutes)
routes.use('/login', LoginRoutes)

module.exports = routes;