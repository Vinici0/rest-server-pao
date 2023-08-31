const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const ITEM = sequelize.define("ITEM", {
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
}, {
  timestamps: false,
  freezeTableName: true,
});

module.exports = ITEM;