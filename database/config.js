// import { Sequelize } from 'sequelize';
const sequelize = require('sequelize');
const dbConnection = new sequelize('pao_arquitectura', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    // logging: false,
});
module.exports = {
    dbConnection
}