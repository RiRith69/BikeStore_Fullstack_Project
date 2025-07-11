// Category.js
import { DataTypes } from "sequelize";
import sequelize from "../DB/database.js";

const Category = sequelize.define("Category", {
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Category;
