import { DataTypes } from "sequelize";
<<<<<<< HEAD
import sequelize from "../DB/database.js";
=======
import  sequelize from "../../database.js";
>>>>>>> refs/remotes/origin/master

const Order = sequelize.define("Order", {
  order_status: DataTypes.STRING,
  order_date: DataTypes.DATEONLY,
  shipped_date: DataTypes.DATEONLY,
  shipping_method: DataTypes.STRING,
});
export default Order;
