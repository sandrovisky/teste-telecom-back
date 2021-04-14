const { Model, DataTypes } = require('sequelize')

class Pedido extends Model {
    static init (sequelize) {
        super.init({
            valorTotal: DataTypes.STRING,
        }, {
            sequelize,
            tableName: "Pedidos"
        })
    }
    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'idCliente', as: 'cliente' })
        this.hasMany(models.PedidoProduto, { foreignKey: 'idPedido', as: 'produtos' })
    }
} 

module.exports = Pedido