'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('PedidoProdutos', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            idPedido: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Pedidos',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            idProduto: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Produtos',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        })
      },
    
      down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('PedidoProdutos')
      }
};
