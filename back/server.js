import  sequelize  from "./database.js";
import setupAssociation from "./src/Models/association.js";
async function run() {
  try {
    setupAssociation();
    await sequelize.authenticate();
    console.log("Connect successfully");

    await sequelize.sync();
    console.log("Synchronized successfully");
  } catch (err) {
    console.log("Cannot connect to database");
  }
}
run();
