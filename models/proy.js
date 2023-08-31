const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const PROY = sequelize.define("PROY", {
  ID_PROY: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  PRODUCTO_INSTITUCIONAL: {
    type: Sequelize.STRING,
  },
  DESCRIPCION_ACTIVIDAD_PROYECTO: {
    type: Sequelize.STRING(1500), // Asegurarse de que la longitud sea suficiente
  },
  PERIODICIDAD: {
    type: Sequelize.STRING,
  },
  MEDIOS_DE_VERIFICACION: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

module.exports = PROY;
