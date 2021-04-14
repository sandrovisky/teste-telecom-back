'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Pedidos', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            idUsuario: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Usuarios',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            },
            valorTotal: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        })
      },
    
      down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Pedidos')
      }
};
