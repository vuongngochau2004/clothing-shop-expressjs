const { DataTypes } = require('sequelize');
const { sequelize } = require('./../../configs/database');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'categories',
      key: 'id'
    }
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  discount: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  img: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  deleted: {
    type: DataTypes.TINYINT(1),
    defaultValue: 0
  },
  gender: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
}, {
  timestamps: true,
  underscored: true
});

module.exports = Product;