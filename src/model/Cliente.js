const { Model, DataTypes } = require('sequelize')

class Usuario extends Model {
    static init (sequelize) {
        super.init({
            nome: DataTypes.STRING,
            telefone: DataTypes.STRING,
            dataNascimento: DataTypes.STRING,
        }, {
            sequelize,
            tableName: "Clientes"
        })
    }
} 

module.exports = Usuario