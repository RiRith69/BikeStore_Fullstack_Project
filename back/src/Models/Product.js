import { DataTypes } from "sequelize";
import sequelize from "../DB/database.js";

const Product = sequelize.define("Product", {
  product_name: DataTypes.STRING,
  model_year: DataTypes.INTEGER,
  price: DataTypes.DECIMAL(10, 2),
  is_available: DataTypes.BOOLEAN,
  CategoryId: DataTypes.INTEGER,
  BrandId: DataTypes.INTEGER,
});
export default Product;
