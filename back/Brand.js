import { DataTypes } from "sequelize";
import sequelize from "./database.js";

const Brand = sequelize.define("Brand", {
  brand_name: DataTypes.STRING,
});
export default Brand;
