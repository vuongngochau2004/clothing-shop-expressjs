const { DataTypes } = require('sequelize');
const { sequelize } = require('./../../configs/database'); // Adjust the path as needed
const bcryptjs = require('bcryptjs');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'active'
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user'
  },
}, {
  timestamps: true,
  underscored: true
});
User.beforeCreate(async (user, options) => {
  if (user.password) {
    user.password = await bcryptjs.hash(user.password, 10);
  }
});

User.beforeUpdate(async (user, options) => {
  if (user.password) {
    user.password = await bcryptjs.hash(user.password, 10);
  }
});

User.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());
  delete values.password;
  return values;
};

module.exports = User;