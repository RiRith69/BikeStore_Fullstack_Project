import { DataTypes } from "sequelize";
import sequelize from "../../database.js";

const Category = sequelize.define("Category", {
  category_name: DataTypes.STRING,
});
export default Category;
