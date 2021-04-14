const { Model, DataTypes } = require('sequelize')

class PedidoProduto extends Model {
    static init (sequelize) {
        super.init({
        }, {
            sequelize,
            tableName: "PedidoProdutos"
        })        
    }
    static associate(models) {
        this.belongsTo(models.Pedido, { foreignKey: 'idPedido', as: 'pedido' })
        this.belongsTo(models.Produto, { foreignKey: 'idProduto', as: 'produto' })
    }
} 

module.exports = PedidoProduto