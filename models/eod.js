const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const {PROY} = require('./index');

const EOD = sequelize.define("EOD", {
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

EOD.hasMany(PROY, {foreignKey: 'ID_EOD', sourceKey: 'ID_EOD'});//De uno a muchos

module.exports = EOD;



