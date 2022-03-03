const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');

const Todo = sequelize.define('todo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(10),
    defaultValue: 'active'
  }
});

module.exports = { Todo };
