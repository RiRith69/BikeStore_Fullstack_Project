import { DataTypes } from "sequelize";
import  sequelize  from "../../database.js";

const Stock = sequelize.define("Stock", {
  quantity: DataTypes.INTEGER,
});
export default Stock;
