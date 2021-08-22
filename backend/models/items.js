'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  items.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    partnumber: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    status: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    // employeesid: {
    //   allowNull: false,
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'employees',
    //     key: 'id',
    //     onUpdate: 'cascade',
    //     onDelete: 'cascade'
    //   },
    // },
    workcenter1: {
      allowNull: false,
      type: DataTypes.STRING
    },
    descrroute1: {
      allowNull: false,
      type: DataTypes.STRING
    },
    cycletime1: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    workcenter2: {
      type: DataTypes.STRING,
    },
    descrroute2: {
      type: DataTypes.STRING,
    },
    cycletime2: {
      type: DataTypes.INTEGER,
    },
    workcenter3: {
      type: DataTypes.STRING,
    },
    descrroute3: {
      type: DataTypes.STRING,
    },
    cycletime3: {
      type: DataTypes.INTEGER,
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
    modelName: 'items',
    freezeTableName: true,
  });
  return items;
};
