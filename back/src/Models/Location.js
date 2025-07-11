import { DataTypes } from "sequelize";
import sequelize from "../DB/database.js";

// Location model
const Location = sequelize.define("Location", {
  street: DataTypes.STRING,
  district: DataTypes.STRING,
  province: DataTypes.STRING,
});
export default Location;
