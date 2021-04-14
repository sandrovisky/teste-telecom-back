const { Model, DataTypes } = require('sequelize')

class Produto extends Model {
    static init (sequelize) {
        super.init({
            nome: DataTypes.STRING,
            valor: DataTypes.STRING
        }, {
            sequelize,
            tableName: "Produtos"
        })
    }
} 

module.exports = Produto