import { DataTypes } from "sequelize";
<<<<<<< HEAD
import sequelize from "../DB/database.js";
=======
import  sequelize  from "../../database.js";
>>>>>>> refs/remotes/origin/master

const Product = sequelize.define("Product", {
  product_name: DataTypes.STRING,
  model_year: DataTypes.INTEGER,
  price: DataTypes.DECIMAL(10, 2),
  is_available: DataTypes.BOOLEAN,
});
export default Product;
