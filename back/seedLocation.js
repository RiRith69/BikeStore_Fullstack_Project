import Location from "./src/Models/Location.js";
const location1 = await Location.create({
  street: "182",
  district: "Daun Penh",
  province: null,
});
export default location1;
