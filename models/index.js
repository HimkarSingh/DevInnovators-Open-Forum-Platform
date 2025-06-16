// models/index.js
const { Sequelize, DataTypes } = require('sequelize'); // Import DataTypes here
const config = require('../config/database');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'postgres'
  }
);

const User = require('./User')(sequelize, DataTypes); // Pass DataTypes explicitly

sequelize.sync({ alter: true }); // Sync models

module.exports = { User, sequelize };