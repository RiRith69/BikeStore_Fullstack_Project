import { DataTypes } from "sequelize";


// Location model
const Location = sequelize.define("Location", {
  street: DataTypes.STRING,
  district: DataTypes.STRING,
  province: DataTypes.STRING,
});
export default Location;
