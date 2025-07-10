import { DataTypes } from "sequelize";
import sequelize from "../DB/database.js";

const Return = sequelize.define("Return", {
  return_date: DataTypes.DATEONLY,
  reason: DataTypes.STRING,
  refund_amount: DataTypes.DECIMAL(10, 2),
});
export default Return;
