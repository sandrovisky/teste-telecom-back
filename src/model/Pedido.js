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
        this.belongsTo(models.Usuario, { foreignKey: 'idUsuario', as: 'usuario' })
        this.hasMany(models.PedidoProduto, { foreignKey: 'idPedido', as: 'produtos' })
    }
} 

module.exports = Pedido