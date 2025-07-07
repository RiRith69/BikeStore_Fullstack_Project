import { DataTypes } from "sequelize";
import  sequelize  from "../../database.js";

const Order_Product = sequelize.define("Order_Product", {
  quantity: DataTypes.INTEGER,
});
export default Order_Product;
