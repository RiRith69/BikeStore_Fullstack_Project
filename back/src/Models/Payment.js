import { DataTypes } from "sequelize";
<<<<<<< HEAD
import sequelize from "../DB/database.js";
=======
import  sequelize  from "../../database.js";
>>>>>>> refs/remotes/origin/master

const Payment = sequelize.define("Payment", {
  payment_status: DataTypes.STRING,
  payment_type: DataTypes.STRING,
  amount: DataTypes.DECIMAL(10, 2),
  payment_date: DataTypes.DATEONLY,
});
export default Payment;
