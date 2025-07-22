import { DataTypes } from "sequelize";
import sequelize from "../DB/database.js";
import bcrypt from "bcrypt";
const User = sequelize.define("User", {
  first_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  username: DataTypes.STRING,
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



