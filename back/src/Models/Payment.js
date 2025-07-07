import { DataTypes } from "sequelize";
import sequelize from "../DB/database.js";
import sequelize from "../../database.js";

const Payment = sequelize.define("Payment", {
  payment_status: DataTypes.STRING,
  payment_type: DataTypes.STRING,
  amount: DataTypes.DECIMAL(10, 2),
  payment_date: DataTypes.DATEONLY,
});
export default Payment;
