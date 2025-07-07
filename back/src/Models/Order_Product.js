import { DataTypes } from "sequelize";
<<<<<<< HEAD
import sequelize from "../DB/database.js";
=======
import  sequelize  from "../../database.js";
>>>>>>> refs/remotes/origin/master

const Order_Product = sequelize.define("Order_Product", {
  quantity: DataTypes.INTEGER,
});
export default Order_Product;
