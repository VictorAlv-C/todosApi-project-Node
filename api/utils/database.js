const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  username: 'postgres',
  password: 'ame123vic',
  port: 5432,
  database: 'todos',
  dialect: 'postgres'
});

module.exports = { sequelize };
