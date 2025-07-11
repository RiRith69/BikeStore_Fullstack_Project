import { DataTypes } from "sequelize";

import sequelize from "../DB/database.js";

const Order = sequelize.define("Order", {
  order_status: DataTypes.STRING,
  order_date: DataTypes.DATEONLY,
  shipped_date: DataTypes.DATEONLY,
  shipping_method: DataTypes.STRING,
  UserId: DataTypes.INTEGER,
});
export default Order;
