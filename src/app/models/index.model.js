const { sequelize } = require('./../../configs/database'); // Giả sử bạn đã thiết lập Sequelize
const User = require('./user.model');
const Category = require('./category.model');
const Product = require('./product.model');

// Liên kết giữa các bảng
Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });


// Xuất ra tất cả các models
module.exports = {
  sequelize,
  User,
  Category,
  Product
};
