import { DataTypes } from "sequelize";
<<<<<<< HEAD
import sequelize from "../DB/database.js";
=======
import sequelize from "../../database.js";
>>>>>>> refs/remotes/origin/master

// Location model
const Location = sequelize.define("Location", {
  street: DataTypes.STRING,
  district: DataTypes.STRING,
  province: DataTypes.STRING,
});
export default Location;
