import "./seedLocation.js";
import location2 from "./seedLocation.js";

export const user1 = await location2.createUser({
  first_name: "Chren",
  last_name: "Sophearith",
  phone_number: 12618700,
  email: "chrensophearith@exmaple.com",
  password: "Rith@0648",
  role: "manager",
});
