import sequelize from "./src/DB/database.js";
import setupAssociation from "./src/Models/association.js";

// Import all models BEFORE associations, so models are registered in Sequelize
import "./src/Models/Brand.js";
import "./src/Models/Category.js";
import "./src/Models/Location.js";
import "./src/Models/Order.js";
import "./src/Models/Order_Product.js";
import "./src/Models/Payment.js";
import "./src/Models/Product.js";
import "./src/Models/Return.js";
import "./src/Models/Stock.js";
import "./src/Models/User.js";

async function run() {
  try {
    // Setup all model associations AFTER models are imported
    setupAssociation();

    // Test DB connection
    await sequelize.authenticate();
    console.log("✅ Connected successfully");

    // Sync DB schema (be cautious with alter in production)
    await sequelize.sync({ alter: true });
    console.log("✅ Synchronized successfully");
  } catch (err) {
    console.error("❌ Cannot connect to database:", err);
  }
}

run();
