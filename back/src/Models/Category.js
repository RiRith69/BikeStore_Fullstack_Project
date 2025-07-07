import { DataTypes } from "sequelize";
<<<<<<< HEAD
import sequelize from "../DB/database.js";
=======
import sequelize from "../../database.js";
>>>>>>> refs/remotes/origin/master

const Category = sequelize.define("Category", {
  category_name: DataTypes.STRING,
});
export default Category;
