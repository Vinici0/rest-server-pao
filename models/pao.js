const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const PAO = sequelize.define("PAO", {
  ID_PAO: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ODS: {
    type: Sequelize.STRING,
  },
  EJE: {
    type: Sequelize.STRING,
  },
  OBJETIVOS_NACIONALES: {
    type: Sequelize.STRING,
  },
  POLITICAS: {
    type: Sequelize.STRING,
  },
  METAS: {
    type: Sequelize.INTEGER,
  },
  PROGRAMA_NACIONAL: {
    type: Sequelize.STRING,
  },
  OBJETIVOS_ESTRATÉGICOS_PEDI: {
    type: Sequelize.STRING,
  },
  OBJETIVOS_OPERATIVOS: {
    type: Sequelize.STRING(1500), // Asegurarse de que la longitud sea suficiente
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

module.exports = PAO;
