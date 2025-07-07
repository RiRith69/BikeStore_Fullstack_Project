import { DataTypes } from "sequelize";
import sequelize from "../DB/database.js";
import sequelize from "../../database.js";
import bcrypt from "bcrypt";
const User = sequelize.define("User", {
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  phone_number: DataTypes.INTEGER,
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("admin", "staff", "customer", "manager"),
    defaultValue: "customer",
    allowNull: false,
  },
});
User.beforeCreate(async (user, option) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});
export default User;
