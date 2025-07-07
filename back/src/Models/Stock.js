import { DataTypes } from "sequelize";
<<<<<<< HEAD
import sequelize from "../DB/database.js";
=======
import  sequelize  from "../../database.js";
>>>>>>> refs/remotes/origin/master

const Stock = sequelize.define("Stock", {
  quantity: DataTypes.INTEGER,
});
export default Stock;
