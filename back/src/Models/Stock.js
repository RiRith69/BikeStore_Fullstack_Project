import { DataTypes } from "sequelize";
import { sequelize } from "../DB/database.js";

const Stock = sequelize.define("Stock", {
  quantity: DataTypes.INTEGER,
});
export default Stock;
