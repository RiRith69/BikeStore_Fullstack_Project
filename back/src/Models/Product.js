import { DataTypes } from "sequelize";
import sequelize from "../DB/database.js";
import sequelize from "../../database.js";

const Product = sequelize.define("Product", {
  product_name: DataTypes.STRING,
  model_year: DataTypes.INTEGER,
  price: DataTypes.DECIMAL(10, 2),
  is_available: DataTypes.BOOLEAN,
});
export default Product;
