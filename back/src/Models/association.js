import Category from "./Category.js";
import Brand from "./Brand.js";
import Location from "./Location.js";
import Order_Product from "./Order_Product.js";
import Order from "./Order.js";
import Payment from "./Payment.js";
import Product from "./Product.js";
import Return from "./Return.js";
import Stock from "./Stock.js";
import User from "./User.js";
export default function setupAssociation() {
  // Rith
  // Location and User
  Location.hasMany(User);
  User.belongsTo(Location);
  // Brand and Product
  Brand.hasMany(Product);
  Product.belongsTo(Brand);
  // Product and Stock
  Product.hasOne(Stock);
  Stock.belongsTo(Product);
  // Order and payment
  Order.hasOne(Payment);
  Payment.belongsTo(Order);

  // Kja
  //Order and Staff
  User.hasMany(Order);
  Order.belongsTo(User);
  // Order and Product in Order_Product
  // Regular orders
  Product.belongsToMany(Order, {
    through: Order_Product,
  });
  Order.belongsToMany(Product, {
    through: Order_Product,
  });

  // // Returns
  Product.belongsToMany(Order, { through: Return });
  Order.belongsToMany(Product, { through: Return });

  // Category and Product
  Category.hasMany(Product, { foreignKey: "CategoryId" });
  Product.belongsTo(Category, { foreignKey: "CategoryId" });
}
