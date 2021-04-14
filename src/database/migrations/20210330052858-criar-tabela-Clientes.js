'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('Clientes', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: Sequelize.STRING,
            telefone: Sequelize.STRING,
            dataNascimento: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        })
      },
    
      down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Clientes')
      }
};
