import { DataTypes } from "sequelize";
import sequelize from "../DB/database.js";

const Brand = sequelize.define("Brand", {
  brand_name: DataTypes.STRING,
});
export default Brand;
