'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  orders.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    itemname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    itempartnum: {
      allowNull: false,
      type: DataTypes.STRING
    },
    itemsid: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'items',
        key: 'id',
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
    },
    number: {
      allowNull: false,
      type: DataTypes.STRING
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    quantitycomplete: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    promiseddate: {
      allowNull: false,
      type: DataTypes.DATE
    },
    priority: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'Low'
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'Created'
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'orders',
    freezeTableName: true,
  });
  return orders;
};