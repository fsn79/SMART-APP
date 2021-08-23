'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      partnumber: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      workcenter1: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      descrroute1: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cycletime1: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      workcenter2: {
        type: Sequelize.STRING,
      },
      descrroute2: {
        type: Sequelize.STRING,
      },
      cycletime2: {
        type: Sequelize.INTEGER,
      },
      workcenter3: {
        type: Sequelize.STRING,
      },
      descrroute3: {
        type: Sequelize.STRING,
      },
      cycletime3: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Items');
  },
};
