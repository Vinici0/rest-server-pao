const { Sequelize } = require("sequelize");
const { dbConnection } = require("../database/config");
const  POA  = require("./pao");

const ITEM = dbConnection.define(
  "ITEM",
  {
    ID_ITEM: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NOMBRE_DEL_ITEM: {
      type: Sequelize.STRING,
    },
    TAREA: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = ITEM;

ITEM.hasMany(POA, { foreignKey: 'ID_ITEM' });
POA.belongsTo(ITEM, { foreignKey: 'ID_ITEM' });
