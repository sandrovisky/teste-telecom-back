'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Produtos', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: Sequelize.STRING,
            valor: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        })
      },
    
      down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Produtos')
      }
};
