import { DataTypes } from "sequelize";
<<<<<<< HEAD
import sequelize from "../DB/database.js";
=======
import  sequelize  from "../../database.js";
>>>>>>> refs/remotes/origin/master

const Return = sequelize.define("Return", {
  return_date: DataTypes.DATEONLY,
  reason: DataTypes.STRING,
  refund_amount: DataTypes.DECIMAL(10, 2),
});
export default Return;
