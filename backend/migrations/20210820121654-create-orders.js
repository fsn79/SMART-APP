'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      itemname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      itempartnum: {
        allowNull: false,
        type: Sequelize.STRING
      },
      itemsid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'items',
          key: 'id',
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
      },
      number: {
        allowNull: false,
        type: Sequelize.STRING
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      quantitycomplete: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      promiseddate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      priority: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'Low'
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: 'Created'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};