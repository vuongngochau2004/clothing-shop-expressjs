const { DataTypes } = require('sequelize');
const { sequelize } = require('./../../configs/database');

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true, 
  underscored: true
});

module.exports = Category;