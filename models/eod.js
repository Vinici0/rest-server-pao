const { Sequelize } = require('sequelize');
const {dbConnection}= require('../database/config');
const PROY = require('./proy');

const EOD = dbConnection.define("EOD", {
  ID_EOD: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  CODIGO : {
    type: Sequelize.STRING,
  },
  CENTRO_GESTOR: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,//Sirve para que no tenga problemas con las fechas
  freezeTableName: true,//Sirve para que no le agregue una s al final de la tabla
});

module.exports  = EOD;

EOD.hasMany(PROY, { foreignKey: 'ID_EOD' });
PROY.belongsTo(EOD, { foreignKey: 'ID_EOD' });